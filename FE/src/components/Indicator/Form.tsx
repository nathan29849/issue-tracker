import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import * as S from './formStyle';

import { postMileStone, patchMileStone } from '@apis/milestone';
import { Button } from '@components/Button';
import I from '@components/Icons';
import { Input } from '@components/Input';
import { IMileStoneTypes } from '@recoil/atoms/milestone';
import { MileStoneRequestBody } from '@type/milestone';
import { checkDueDate } from '@utils/date';

interface FormProps {
  title: string;
  mileStoneData?: IMileStoneTypes;
  onEdit: boolean;
  handleCloseForm: (id?: number) => void;
}

export default function Form({
  title,
  mileStoneData,
  onEdit,
  handleCloseForm,
}: FormProps) {
  const queryClient = useQueryClient();

  const [openFormValue, setOpenFormValue] = useState({
    title: mileStoneData?.title || '',
    description: mileStoneData?.description || '',
    dueDate: mileStoneData?.dueDate || '',
  });

  const [initFormValue, setInitFormValue] = useState({
    title: openFormValue.title,
    description: openFormValue.description,
    dueDate: openFormValue.dueDate,
  });

  const fetchPostMileStone = useMutation(postMileStone, {
    onSuccess: () => {
      queryClient.invalidateQueries('mileStoneData');
    },
  });

  const fetchPatchMileStone = useMutation(
    ({
      patchId,
      newMileStone,
    }: {
      patchId: number;
      newMileStone: MileStoneRequestBody;
    }) => patchMileStone(patchId, newMileStone),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('mileStoneData');
      },
    },
  );

  const handleMileStoneTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenFormValue(prevState => ({
      ...prevState,
      title: e.target.value,
    }));
  };

  const handleMileStoneDueDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenFormValue(prevState => ({
      ...prevState,
      dueDate: e.target.value,
    }));
  };

  const handleMileStoneDescription = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setOpenFormValue(prevState => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const handleSubmit = (
    e: React.SyntheticEvent<HTMLFormElement>,
    patchId?: number,
  ) => {
    e.preventDefault();
    const newMileStone = {
      title: openFormValue.title,
      description: openFormValue.description,
      dueDate: openFormValue.dueDate,
    };

    if (!checkDueDate(newMileStone.dueDate)) {
      console.log('에러처리');
      return;
    }

    if (patchId) {
      fetchPatchMileStone.mutate({ patchId, newMileStone });
    } else {
      fetchPostMileStone.mutate(newMileStone);
    }
  };

  useEffect(() => {
    if (fetchPostMileStone.isSuccess) {
      handleCloseForm();
    }
  }, [fetchPostMileStone, handleCloseForm]);

  useEffect(() => {
    if (fetchPatchMileStone.isSuccess) {
      handleCloseForm(fetchPatchMileStone.data.patchId);
    }
  }, [fetchPatchMileStone, handleCloseForm]);

  return (
    <S.FormWrapper>
      <S.FormContents>
        <S.FormTitle>{title}</S.FormTitle>
        <S.FormInputWrapper>
          <Input
            type="text"
            width="50%"
            value={openFormValue.title || ''}
            placeholder="마일스톤 이름"
            onChange={handleMileStoneTitle}
          />
          <Input
            type="text"
            width="50%"
            value={openFormValue.dueDate || ''}
            placeholder="완료일(선택) ex.YYYY-MM-DD"
            onChange={handleMileStoneDueDate}
          />
        </S.FormInputWrapper>
        <S.FormInputWrapper>
          <Input
            type="text"
            width="56.25rem"
            value={openFormValue.description || ''}
            placeholder="설명(선택)"
            onChange={handleMileStoneDescription}
          />
        </S.FormInputWrapper>
        <S.FormButtonWrapper>
          {onEdit ? (
            <>
              <Button
                outlined
                css={css`
                  margin-right: 1rem;
                `}
                onClick={() => handleCloseForm(mileStoneData?.id)}
              >
                취소
              </Button>
              <Button
                type="submit"
                disabled={
                  initFormValue.title === openFormValue.title &&
                  initFormValue.description === openFormValue.description &&
                  initFormValue.dueDate === openFormValue.dueDate
                }
                onClick={(e: React.SyntheticEvent<HTMLFormElement>) =>
                  handleSubmit(e, mileStoneData?.id)
                }
              >
                <I.Edit />
                완료
              </Button>
            </>
          ) : (
            <Button
              type="submit"
              disabled={openFormValue.title === ''}
              onClick={(e: React.SyntheticEvent<HTMLFormElement>) =>
                handleSubmit(e)
              }
            >
              <I.Plus />
              완료
            </Button>
          )}
        </S.FormButtonWrapper>
      </S.FormContents>
    </S.FormWrapper>
  );
}

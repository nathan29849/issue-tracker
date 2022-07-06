import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import * as S from './formStyle';

import { postLabels, patchLabel, PostLabelRequestBody } from '@apis/label';
import { Button } from '@components/Button';
import I from '@components/Icons';
import { Input } from '@components/Input';
import { Label } from '@components/Label';
import Popup from '@components/Popup';
import RadioSelection from '@components/RadioSelection';
import {
  radioColorText,
  initBgColor,
  defaultBgColors,
} from '@constants/default';
import useComponentVisible from '@hooks/useComponentVisible';
import { ILabelTypes } from '@recoil/atoms/label';
import { typoXSmall, flexbox } from '@styles/mixin';
import theme from '@styles/theme';

interface FormProps {
  title: string;
  labelData?: ILabelTypes;
  onEdit: boolean;
  handleCloseForm: (id?: number) => void;
}

export default function Form({
  title,
  labelData,
  onEdit,
  handleCloseForm,
}: FormProps) {
  const queryClient = useQueryClient();

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [openFormValue, setOpenFormValue] = useState({
    labelText: labelData?.title || '',
    description: labelData?.description || '',
    bgColor: labelData?.backgroundColor || initBgColor,
    textColor:
      labelData?.textColor === 'BLACK'
        ? '어두운색'
        : '밝은색' || radioColorText[0],
  });

  const [initFormValue, setInitFormValue] = useState({
    labelText: openFormValue.labelText,
    description: openFormValue.description,
    bgColor: openFormValue.bgColor,
    textColor: openFormValue.textColor,
  });

  const fetchPostLabels = useMutation(postLabels, {
    onSuccess: () => {
      queryClient.invalidateQueries('labelData');
    },
  });

  const fetchPatchLabel = useMutation(
    ({ patchId, newLabel }: any) => patchLabel(patchId, newLabel),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('labelData');
      },
    },
  );

  const handleLabelText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenFormValue(prevState => ({
      ...prevState,
      labelText: e.target.value,
    }));
  };

  const handleLabelDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenFormValue(prevState => ({
      ...prevState,
      description: e.target.value,
    }));
  };

  const handleBgColor = () => {
    // 랜덤 컬러 색상 만드는 함수
    const randomColor = new Array(3).fill(0).reduce((prev: string) => {
      // eslint-disable-next-line no-param-reassign
      prev += Math.floor(Math.random() * 127 + 128)
        .toString(16)
        .toUpperCase();
      return prev;
    }, '#');

    setOpenFormValue(prevState => ({
      ...prevState,
      bgColor: randomColor,
    }));
  };

  const handleColorText = (color: string) => {
    setOpenFormValue(prevState => ({
      ...prevState,
      textColor: color,
    }));
  };

  const onColorPopup = () => {
    setIsComponentVisible(true);
  };

  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') e.target.value = '#';
    setOpenFormValue(prevState => ({
      ...prevState,
      bgColor: e.target.value,
    }));
  };

  const handleColorClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    e.stopPropagation();
    setOpenFormValue(prevState => ({
      ...prevState,
      bgColor: button.value,
    }));
    setIsComponentVisible(false);
  };

  const handleSubmit = (
    e: React.SyntheticEvent<HTMLFormElement>,
    patchId?: number,
  ) => {
    e.preventDefault();
    const newLabel = {
      title: openFormValue.labelText,
      description: openFormValue.description,
      backgroundColor: openFormValue.bgColor,
      textColor: openFormValue.textColor === '어두운색' ? 'BLACK' : 'WHITE',
    };

    if (patchId) {
      fetchPatchLabel.mutate({ patchId, newLabel });
    } else {
      fetchPostLabels.mutate(newLabel);
    }
  };

  useEffect(() => {
    if (fetchPostLabels.isSuccess) {
      handleCloseForm();
    }
  }, [fetchPostLabels, handleCloseForm]);

  useEffect(() => {
    if (fetchPatchLabel.isSuccess) {
      handleCloseForm(fetchPatchLabel.data.patchId);
    }
  }, [fetchPatchLabel, handleCloseForm]);

  return (
    <S.FormWrapper title={title}>
      <S.FormLeftInner>
        <S.FormTitle>{title}</S.FormTitle>
        <Label
          bgColor={openFormValue.bgColor}
          darkText={openFormValue.textColor === '어두운색'}
        >
          {openFormValue.labelText || '레이블 이름'}
        </Label>
        <div />
      </S.FormLeftInner>
      <S.FormContents>
        <S.FormRightInner>
          <Input
            type="text"
            width="56.25rem"
            value={openFormValue.labelText || ''}
            placeholder="레이블 이름"
            onChange={handleLabelText}
          />
          <Input
            type="text"
            width="56.25rem"
            value={openFormValue.description || ''}
            placeholder="설명(선택)"
            onChange={handleLabelDescription}
          />
          <S.FormInnerWrapper>
            <S.ColorWrapper>
              <Input
                type="text"
                value={openFormValue.bgColor || ''}
                width={240}
                placeholder="배경 색상"
                onClick={onColorPopup}
                onChange={onChangeColor}
                maxLength={7}
              />
              <S.RefreshButton type="button" onClick={handleBgColor}>
                <I.Refresh color={openFormValue.bgColor} />
              </S.RefreshButton>
              <div
                ref={ref}
                css={css`
                  position: absolute;
                  left: 0;
                  top: 3rem;
                `}
              >
                {isComponentVisible && (
                  <Popup>
                    <div
                      css={css`
                        margin-top: 1rem;
                        padding: 0 1rem;
                        ${typoXSmall(400)}
                        ${flexbox({ ai: 'center' })}
                      `}
                    >
                      Choose from default colors
                    </div>
                    <div
                      css={css`
                        padding: 0.5rem 1rem;
                        background-color: ${theme.color.offWhite};
                        color: ${theme.color.line};
                        ${flexbox({ ai: 'center' })}
                        gap: 2px;
                        flex-wrap: wrap;
                      `}
                    >
                      {defaultBgColors.map(color => (
                        <button
                          type="button"
                          key={color}
                          value={color}
                          css={css`
                            width: 1.5rem;
                            height: 1.5rem;
                            border-radius: 5px;
                            background-color: ${color};
                            cursor: pointer;
                          `}
                          onClick={handleColorClick}
                        />
                      ))}
                    </div>
                  </Popup>
                )}
              </div>
            </S.ColorWrapper>
            <RadioSelection.Container title="텍스트 색상">
              {radioColorText.map((radioColor: string) => (
                <RadioSelection.Option
                  key={radioColor}
                  checked={openFormValue.textColor === radioColor}
                  onClick={() => handleColorText(radioColor)}
                >
                  {radioColor}
                </RadioSelection.Option>
              ))}
            </RadioSelection.Container>
          </S.FormInnerWrapper>
        </S.FormRightInner>
        <S.FormButtonWrapper>
          {onEdit ? (
            <>
              <Button
                outlined
                css={css`
                  margin-right: 1rem;
                `}
                onClick={() => handleCloseForm(labelData?.id)}
              >
                취소
              </Button>
              <Button
                type="submit"
                disabled={
                  initFormValue.labelText === openFormValue.labelText &&
                  initFormValue.bgColor === openFormValue.bgColor &&
                  initFormValue.description === openFormValue.description &&
                  initFormValue.textColor === openFormValue.textColor
                }
                onClick={(e: React.SyntheticEvent<HTMLFormElement>) =>
                  handleSubmit(e, labelData?.id)
                }
              >
                <I.Edit />
                완료
              </Button>
            </>
          ) : (
            <Button
              type="submit"
              disabled={
                openFormValue.labelText === '' ||
                openFormValue.bgColor === '' ||
                openFormValue.textColor === ''
              }
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

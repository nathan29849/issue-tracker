import { css } from '@emotion/react';
import { useState } from 'react';
import { useQuery } from 'react-query';

import * as S from './style';

import { Button } from '@components/Button';
import I from '@components/Icons';
import { Label } from '@components/Label';
import Form from '@components/Label/Form';
import Modal from '@components/Modal';
import TabList from '@components/TabList';
import { ILabelTypes } from '@recoil/atoms/label';

const getLabels = async () => {
  const res = await fetch('/issue/label');
  return res.json();
};

export default function LabelPage() {
  const { data, status } = useQuery('labelData', getLabels);
  const [openForm, setOpenForm] = useState(false);
  const [editOpenForm, setEditOpenForm] = useState<{ [id: number]: boolean }>(
    {},
  );

  const [modalVisible, setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const handleLabelEditClick = (id: number) => {
    setEditOpenForm(prevEditFormState => ({
      ...prevEditFormState,
      [id]: true,
    }));
  };

  const handleLabelDeleteClick = (id: number) => {
    setModalVisible(true);
    setDeleteId(id);
  };

  const handleLabelDeleteCancel = () => {
    setModalVisible(false);
  };

  const handleLabelDeleteSubmit = () => {
    // TODO delete api request
    console.log(deleteId);
    setModalVisible(false);
  };

  const handleCloseForm = (id?: number) => {
    if (id) {
      setEditOpenForm(prevEditFormState => ({
        ...prevEditFormState,
        [id]: false,
      }));
    } else {
      setOpenForm(false);
    }
  };

  return (
    <S.LabelPageLayer>
      <S.Header>
        <TabList />
        {openForm ? (
          <Button onClick={() => setOpenForm(!openForm)} outlined>
            <I.XMark color="#007AFF" />
            닫기
          </Button>
        ) : (
          <Button onClick={() => setOpenForm(!openForm)}>
            <I.Plus />
            추가
          </Button>
        )}
      </S.Header>
      {openForm && (
        <Form
          title="새로운 레이블 추가"
          onEdit={false}
          handleCloseForm={handleCloseForm}
        />
      )}
      <S.Main>
        <S.LabelCount>
          {status === 'success' ? data.length : 0}개의 레이블
        </S.LabelCount>
        {status === 'success' &&
          data.map((label: ILabelTypes) =>
            editOpenForm[label.id] ? (
              <Form
                key={`EditLabelForm-${label.title}`}
                title="레이블 편집"
                onEdit
                labelData={label}
                handleCloseForm={id => handleCloseForm(id)}
              />
            ) : (
              <S.LabelItemWrapper key={label.id}>
                <S.LabelLeft>
                  <Label
                    bgColor={label.backgroundColor}
                    darkText={label.textColor === 'BLACK'}
                  >
                    {label.title}
                  </Label>
                  <S.LabelTitle>Label Title</S.LabelTitle>
                </S.LabelLeft>
                <S.LabelRight>
                  <button
                    type="button"
                    onClick={() => handleLabelEditClick(label.id)}
                  >
                    <S.EditBox>
                      <I.Edit />
                      <span>편집</span>
                    </S.EditBox>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleLabelDeleteClick(label.id)}
                  >
                    <S.TrashBox>
                      <I.Trash />
                      <span>삭제</span>
                    </S.TrashBox>
                  </button>
                </S.LabelRight>
              </S.LabelItemWrapper>
            ),
          )}
        {modalVisible && (
          <Modal>
            <header
              css={css`
                margin-bottom: 2rem;
              `}
            >
              해당 레이블을 정말 삭제하시겠습니까?
            </header>
            <div>
              <Button
                outlined
                type="button"
                onClick={handleLabelDeleteCancel}
                css={css`
                  margin-right: 1rem;
                `}
              >
                닫기
              </Button>
              <Button type="button" onClick={handleLabelDeleteSubmit}>
                확인
              </Button>
            </div>
          </Modal>
        )}
      </S.Main>
    </S.LabelPageLayer>
  );
}

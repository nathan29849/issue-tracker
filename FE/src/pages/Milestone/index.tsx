import { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';

import * as S from './style';

import { getMileStones, deleteMileStone } from '@apis/milestone';
import { Button } from '@components/Button';
import I from '@components/Icons';
import { ProgressBar } from '@components/Indicator';
import Form from '@components/Indicator/Form';
import Modal from '@components/Modal';
import TabList from '@components/TabList';
import { IMileStone } from '@type/milestone';

export default function Milestone() {
  const queryClient = useQueryClient();
  const [openForm, setOpenForm] = useState(false);
  const [editOpenForm, setEditOpenForm] = useState<{ [id: number]: boolean }>(
    {},
  );
  const [mileStoneCount, setMileStoneCount] = useState({ open: 0, close: 0 });
  const [mileStoneStatus, setMileStoneStatus] = useState(true);
  const [renderMileStone, setRenderMileStone] = useState<IMileStone[]>([]);

  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [closeModalVisible, setCloseModalVisible] = useState(false);

  const [clickedId, setClickedId] = useState(0);

  const { data: mileStoneData } = useQuery('milestoneData', getMileStones);

  const fetchDeleteMileStone = useMutation(deleteMileStone, {
    onSuccess: () => {
      queryClient.invalidateQueries('milestoneData');
    },
  });

  const handleMileStoneEditClick = (id: number) => {
    setEditOpenForm(prevEditFormState => ({
      ...prevEditFormState,
      [id]: true,
    }));
  };

  const handleMileStoneCloseClick = (id: number) => {
    setCloseModalVisible(true);
    setClickedId(id);
  };

  const handleMileStoneDeleteClick = (id: number) => {
    setDeleteModalVisible(true);
    setClickedId(id);
  };

  const handleMileStoneCancelClick = () => {
    setDeleteModalVisible(false);
  };

  const handleCloseCancelClick = () => {
    setCloseModalVisible(false);
  };

  const handleMileStoneSubmit = () => {
    fetchDeleteMileStone.mutate(clickedId);
    setDeleteModalVisible(false);
  };

  const handleCloseSubmit = () => {
    setCloseModalVisible(false);
  };

  const handleLabelClick = (paramLabelMileStoneStatus: string) => {
    if (paramLabelMileStoneStatus === 'open') {
      setMileStoneStatus(true);
    } else if (paramLabelMileStoneStatus === 'close') {
      setMileStoneStatus(false);
    }
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

  useEffect(() => {
    if (mileStoneData) {
      const openMileStoneCount =
        mileStoneData.currentMilestones.length +
        mileStoneData.nullDueDateMilestones.length;
      const closeMileStoneCount = mileStoneData.expiredMilestones.length;
      const newMileStoneArr = mileStoneData.currentMilestones.concat(
        mileStoneData.nullDueDateMilestones,
      );
      setMileStoneCount({
        open: openMileStoneCount,
        close: closeMileStoneCount,
      });
      setRenderMileStone(newMileStoneArr);
    }
  }, [mileStoneData]);

  useEffect(() => {
    if (mileStoneData) {
      if (mileStoneStatus) {
        const newMileStoneArr = mileStoneData.currentMilestones.concat(
          mileStoneData.nullDueDateMilestones,
        );
        setRenderMileStone(newMileStoneArr);
      } else {
        setRenderMileStone(mileStoneData.expiredMilestones);
      }
    }
  }, [mileStoneData, mileStoneStatus]);

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
          title="새로운 마일스톤 추가"
          onEdit={false}
          handleCloseForm={handleCloseForm}
        />
      )}
      <S.Main>
        <S.MainHeaderLabel>
          <S.MileStoneLabel
            mileStoneStatus={mileStoneStatus}
            onClick={() => handleLabelClick('open')}
          >
            <I.MileStone />
            <span>열린 마일스톤({mileStoneCount.open})</span>
          </S.MileStoneLabel>

          <S.MileStoneLabel
            mileStoneStatus={!mileStoneStatus}
            onClick={() => handleLabelClick('close')}
          >
            <I.Bucket />
            <span>닫힌 마일스톤({mileStoneCount.close})</span>
          </S.MileStoneLabel>
        </S.MainHeaderLabel>

        {renderMileStone.length !== 0 ? (
          renderMileStone.map((mileStone: IMileStone) =>
            editOpenForm[mileStone.id] ? (
              <Form
                key={`EditMileStoneForm-${mileStone.title}`}
                title="마일스톤 편집"
                onEdit
                mileStoneData={mileStone}
                handleCloseForm={id => handleCloseForm(id)}
              />
            ) : (
              <S.MileStoneItemWrapper>
                <S.MileStoneLeft>
                  <S.MileStoneTitle>
                    <div>
                      <I.MileStone color="#007AFF" />
                      <span className="milestone-mainTitle">
                        {mileStone.title}
                      </span>
                    </div>
                    <div>
                      <I.Calendar color="#6E7191" />
                      <span className="milestone-date">
                        {mileStone.dueDate ? mileStone.dueDate : '만료일 없음'}
                      </span>
                    </div>
                  </S.MileStoneTitle>
                  <p className="milestone-des">{mileStone.description}</p>
                </S.MileStoneLeft>
                <S.MileStoneRight>
                  <div className="milestone-buttons">
                    <div>
                      <button
                        type="button"
                        onClick={() => handleMileStoneCloseClick(mileStone.id)}
                      >
                        <I.Bucket color="#6E7191" />
                        <span className="button--text">닫기</span>
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => handleMileStoneEditClick(mileStone.id)}
                      >
                        <I.Edit color="#6E7191" />
                        <span className="button--text">편집</span>
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={() => handleMileStoneDeleteClick(mileStone.id)}
                      >
                        <I.Trash color="#FF3B30" />
                        <span className="button--delete">삭제</span>
                      </button>
                    </div>
                  </div>
                  <ProgressBar
                    width={50}
                    detail
                    leftText={`열린 이슈 ${mileStone.openIssueCount}`}
                    rightText={`닫힌 이슈 ${mileStone.closedIssueCount}`}
                  />
                </S.MileStoneRight>
              </S.MileStoneItemWrapper>
            ),
          )
        ) : (
          <div>등록된 마일스톤이 없습니다.</div>
        )}
        {deleteModalVisible && (
          <Modal
            title="해당 마일스톤을 정말 삭제하시겠습니까?"
            handleCancelClick={handleMileStoneCancelClick}
            handleSubmit={handleMileStoneSubmit}
          />
        )}
        {closeModalVisible && (
          <Modal
            title="해당 마일스톤을 정말 닫으시겠습니까?"
            handleCancelClick={handleCloseCancelClick}
            handleSubmit={handleCloseSubmit}
          />
        )}
      </S.Main>
    </S.LabelPageLayer>
  );
}

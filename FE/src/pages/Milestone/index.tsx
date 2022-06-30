import { css } from '@emotion/react';
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

export default function Milestone() {
  const queryClient = useQueryClient();
  const [openForm, setOpenForm] = useState(false);
  const [mileStoneCount, setMileStoneCount] = useState({ open: 0, close: 0 });
  const [labelMileStoneStatus, setLabelMileStoneStatus] = useState(true);
  const [renderMileStone, setRenderMileStone] = useState({});

  const [modalVisible, setModalVisible] = useState(false);
  const [deleteId, setDeleteId] = useState(0);

  const { data: mileStoneData } = useQuery('milestoneData', getMileStones);

  const fetchDeleteMileStone = useMutation(deleteMileStone, {
    onSuccess: () => {
      queryClient.invalidateQueries('milestoneData');
    },
  });

  const handleLabelDeleteClick = (id: number) => {
    setModalVisible(true);
    setDeleteId(id);
  };

  const handleLabelDeleteCancel = () => {
    setModalVisible(false);
  };

  const handleLabelDeleteSubmit = () => {
    fetchDeleteMileStone.mutate(deleteId);
    setModalVisible(false);
  };

  const handleLabelClick = (paramLabelMileStoneStatus: string) => {
    if (paramLabelMileStoneStatus === 'open') {
      setLabelMileStoneStatus(true);
    } else if (paramLabelMileStoneStatus === 'close') {
      setLabelMileStoneStatus(false);
    }
  };

  useEffect(() => {
    if (mileStoneData) {
      const openMileStoneCount =
        mileStoneData.currentMilestones.length +
        mileStoneData.nullDueDateMilestones.length;
      const closeMileStoneCount = mileStoneData.expiredMilestones.length;
      setMileStoneCount({
        open: openMileStoneCount,
        close: closeMileStoneCount,
      });
      setRenderMileStone({
        ...mileStoneData.currentMilestones,
        ...mileStoneData.nullDueDateMilestones,
      });
    }
  }, [mileStoneData]);

  useEffect(() => {
    // mileStoneData if절로 조건을 안주면 type error 발생
    if (mileStoneData) {
      if (labelMileStoneStatus) {
        setRenderMileStone({
          ...mileStoneData.currentMilestones,
          ...mileStoneData.nullDueDateMilestones,
        });
      } else {
        setRenderMileStone(mileStoneData.expiredMilestones);
      }
    }
  }, [mileStoneData, labelMileStoneStatus]);

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
      {openForm && <Form />}
      <S.Main>
        <S.MainHeaderLabel>
          <S.MileStoneLabel
            labelMileStoneStatus={labelMileStoneStatus}
            onClick={() => handleLabelClick('open')}
          >
            <I.MileStone />
            <span>열린 마일스톤({mileStoneCount.open})</span>
          </S.MileStoneLabel>

          <S.MileStoneLabel
            labelMileStoneStatus={!labelMileStoneStatus}
            onClick={() => handleLabelClick('close')}
          >
            <I.Bucket />
            <span>닫힌 마일스톤({mileStoneCount.close})</span>
          </S.MileStoneLabel>
        </S.MainHeaderLabel>

        {Object.keys(renderMileStone).length !== 0 ? (
          Object.values(renderMileStone).map((mileStone: any) => (
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
                    <button type="button">
                      <I.Bucket color="#6E7191" />
                      <span className="button--text">닫기</span>
                    </button>
                  </div>
                  <div>
                    <button type="button">
                      <I.Edit color="#6E7191" />
                      <span className="button--text">편집</span>
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => handleLabelDeleteClick(mileStone.id)}
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
          ))
        ) : (
          <div>등록된 마일스톤이 없습니다.</div>
        )}
        {modalVisible && (
          <Modal>
            <header>해당 레이블을 정말 삭제하시겠습니까?</header>
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

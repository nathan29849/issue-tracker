import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';

import * as S from './style';

import { Button } from '@components/Button';
import I from '@components/Icons';
import { ProgressBar } from '@components/Indicator';
import Form from '@components/Indicator/Form';
import TabList from '@components/TabList';

export default function Milestone() {
  const [openForm, setOpenForm] = useState(false);
  const [labelMileStoneStatus, setLabelMileStoneStatus] = useState(true);

  const handleLabelClick = (status: string) => {
    if (status === 'open') {
      setLabelMileStoneStatus(true);
    } else if (status === 'close') {
      setLabelMileStoneStatus(false);
    }
  };

  const openMileStoneCount = 1;
  const closeMileStoneCount = 3;

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
            <span>열린 마일스톤({openMileStoneCount})</span>
          </S.MileStoneLabel>

          <S.MileStoneLabel
            labelMileStoneStatus={!labelMileStoneStatus}
            onClick={() => handleLabelClick('close')}
          >
            <I.Bucket />
            <span>닫힌 마일스톤({closeMileStoneCount})</span>
          </S.MileStoneLabel>
        </S.MainHeaderLabel>

        <S.MileStoneItemWrapper>
          <S.MileStoneLeft>
            <S.MileStoneTitle>
              <div>
                <I.MileStone color="#007AFF" />
                <span className="milestone-mainTitle">마일스톤 제목</span>
              </div>
              <div>
                <I.Calendar color="#6E7191" />
                <span className="milestone-date">2022-06-30</span>
              </div>
            </S.MileStoneTitle>
            <p className="milestone-des">레이블에 대한 설명</p>
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
                <button type="button">
                  <I.Trash color="#FF3B30" />
                  <span className="button--delete">삭제</span>
                </button>
              </div>
            </div>
            <ProgressBar
              width={50}
              detail
              leftText={`열린 이슈 ${0}`}
              rightText={`닫힌 이슈 ${0}`}
            />
          </S.MileStoneRight>
        </S.MileStoneItemWrapper>
      </S.Main>
    </S.LabelPageLayer>
  );
}

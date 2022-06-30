import { css } from '@emotion/react';
import React from 'react';

import I from '@components/Icons';
import { ProgressBar } from '@components/Indicator/ProgressBar';
import Popup from '@components/Popup';
import { Header } from '@components/SideBar/Common';
import { useMileStone } from '@components/SideBar/context';
import * as PopupS from '@components/SideBar/popupStyle';
import * as S from '@components/SideBar/style';
import useComponentVisible from '@hooks/useComponentVisible';

const MileStonePanel: React.FC<{ allowDuplicates?: boolean }> = ({
  allowDuplicates = false,
}) => {
  const { state } = useMileStone();
  const { isComponentVisible, setIsComponentVisible, ref } =
    useComponentVisible(false);

  return (
    <S.PanelContainer>
      <div
        ref={ref}
        css={css`
          position: relative;
        `}
      >
        <Header
          title="마일스톤"
          onClick={() => setIsComponentVisible(p => !p)}
        />
        {isComponentVisible && (
          <MileStonePopup allowDuplicates={allowDuplicates} />
        )}
      </div>

      <S.List>
        {state
          .filter(({ selected }) => selected)
          ?.map(
            ({
              milestone: { id, title, openIssueCount, closedIssueCount },
            }) => {
              const totalIssueCount = openIssueCount + closedIssueCount;
              const progressWidth = (closedIssueCount / totalIssueCount) * 100;
              return (
                <S.MileStoneItem key={id}>
                  <ProgressBar width={progressWidth} />
                  <S.MileStoneTitle>{title}</S.MileStoneTitle>
                </S.MileStoneItem>
              );
            },
          )}
      </S.List>
    </S.PanelContainer>
  );
};

const MileStonePopup: React.FC<{ allowDuplicates?: boolean }> = ({
  allowDuplicates = false,
}) => {
  const {
    state: milestones,
    replaceMileStone,
    selectMileStone,
  } = useMileStone();

  const handleClickListItem = (milestoneId: number) => () => {
    if (allowDuplicates) {
      selectMileStone(milestoneId);
      return;
    }
    replaceMileStone(milestoneId);
  };

  return (
    <PopupS.PopupContainer>
      <Popup>
        <PopupS.InnerContainer>
          <PopupS.Header>
            <h2>마일스톤 선택</h2>
          </PopupS.Header>
          <PopupS.List>
            {milestones.map(({ milestone: { id, title }, selected }) => (
              <PopupS.ItemCommon
                selected={selected}
                onClick={handleClickListItem(id)}
                key={id}
              >
                <PopupS.MileStoneTitle>{title}</PopupS.MileStoneTitle>
                {selected ? <I.Circle.Check /> : <I.Circle.Plain />}
              </PopupS.ItemCommon>
            ))}
          </PopupS.List>
        </PopupS.InnerContainer>
      </Popup>
    </PopupS.PopupContainer>
  );
};

export default MileStonePanel;

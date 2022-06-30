import { css } from '@emotion/react';
import React from 'react';

import I from '@components/Icons';
import { Label } from '@components/Label';
import Popup from '@components/Popup';
import { Header } from '@components/SideBar/Common';
import { useLabelPanel } from '@components/SideBar/context';
import * as PopupS from '@components/SideBar/popupStyle';
import * as S from '@components/SideBar/style';
import UserAvatar from '@components/UserAvatar';
import useComponentVisible from '@hooks/useComponentVisible';

const COLOR = {
  BLACK: 'BLACK',
};

const LabelPanel: React.FC<{ allowDuplicates?: boolean }> = ({
  allowDuplicates = false,
}) => {
  const { state } = useLabelPanel();
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
        <Header title="레이블" onClick={() => setIsComponentVisible(p => !p)} />
        {isComponentVisible && <LabelPopup allowDuplicates={allowDuplicates} />}
      </div>

      <S.List>
        {state
          .filter(({ selected }) => selected)
          ?.map(({ label: { id, title, backgroundColor, textColor } }) => (
            <S.LabelItem key={id}>
              <Label
                bgColor={backgroundColor}
                darkText={textColor === COLOR.BLACK}
              >
                {title}
              </Label>
            </S.LabelItem>
          ))}
      </S.List>
    </S.PanelContainer>
  );
};

const LabelPopup: React.FC<{ allowDuplicates?: boolean }> = ({
  allowDuplicates = false,
}) => {
  const { state: labels, replaceLabel, selectLabel } = useLabelPanel();

  const handleClickListItem = (labelId: number) => () => {
    if (allowDuplicates) {
      selectLabel(labelId);
      return;
    }
    replaceLabel(labelId);
  };

  return (
    <PopupS.PopupContainer>
      <Popup>
        <PopupS.InnerContainer>
          <PopupS.Header>
            <h2>레이블 선택</h2>
          </PopupS.Header>
          <PopupS.List>
            {labels.map(
              ({ label: { id, backgroundColor, title }, selected }) => (
                <PopupS.ItemCommon
                  selected={selected}
                  onClick={handleClickListItem(id)}
                  key={id}
                >
                  <PopupS.AvatarWrapper>
                    <UserAvatar fill={backgroundColor} src="" alt={title} />
                  </PopupS.AvatarWrapper>
                  <PopupS.LabelTitle>{title}</PopupS.LabelTitle>
                  {selected ? <I.Circle.Check /> : <I.Circle.Plain />}
                </PopupS.ItemCommon>
              ),
            )}
          </PopupS.List>
        </PopupS.InnerContainer>
      </Popup>
    </PopupS.PopupContainer>
  );
};

export default LabelPanel;

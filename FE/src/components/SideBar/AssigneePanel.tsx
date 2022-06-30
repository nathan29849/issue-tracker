import { css } from '@emotion/react';
import React from 'react';

import { Header } from './Common';
import * as PopupS from './popupStyle';
import * as S from './style';

import I from '@components/Icons';
import Popup from '@components/Popup';
import { useAssignee } from '@components/SideBar/context';
import UserAvatar from '@components/UserAvatar';
import useComponentVisible from '@hooks/useComponentVisible';

const AssigneePanel: React.FC<{ allowDuplicates?: boolean }> = ({
  allowDuplicates = false,
}) => {
  const { state } = useAssignee();
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
        <Header title="담당자" onClick={() => setIsComponentVisible(p => !p)} />
        {isComponentVisible && (
          <AssigneePopup allowDuplicates={allowDuplicates} />
        )}
      </div>

      <S.List>
        {state
          .filter(({ selected }) => selected)
          ?.map(({ user: { userId, profileImageUrl } }) => (
            <S.AssigneeItem key={userId}>
              <S.AvatarWrapper>
                <UserAvatar size="lg" src={profileImageUrl} alt={userId} />
              </S.AvatarWrapper>
              <S.AssigneeName>{userId}</S.AssigneeName>
            </S.AssigneeItem>
          ))}
      </S.List>
    </S.PanelContainer>
  );
};

const AssigneePopup: React.FC<{ allowDuplicates?: boolean }> = ({
  allowDuplicates = false,
}) => {
  const { state: users, replaceAssignee, selectAssignee } = useAssignee();

  const handleClickListItem = (userId: string) => () => {
    if (allowDuplicates) {
      selectAssignee(userId);
      return;
    }
    replaceAssignee(userId);
  };

  return (
    <PopupS.PopupContainer>
      <Popup>
        <PopupS.InnerContainer>
          <PopupS.Header>
            <h2>담당자 선택</h2>
          </PopupS.Header>
          <PopupS.List>
            {users.map(({ user: { userId, profileImageUrl }, selected }) => (
              <PopupS.AssigneeItem
                selected={selected}
                onClick={handleClickListItem(userId)}
                key={userId}
              >
                <PopupS.AvatarWrapper>
                  <UserAvatar src={profileImageUrl} alt={userId} />
                </PopupS.AvatarWrapper>
                <PopupS.AssigneeName>{userId}</PopupS.AssigneeName>
                {selected ? <I.Circle.Check /> : <I.Circle.Plain />}
              </PopupS.AssigneeItem>
            ))}
          </PopupS.List>
        </PopupS.InnerContainer>
      </Popup>
    </PopupS.PopupContainer>
  );
};

export default AssigneePanel;

import { css } from '@emotion/react';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import * as S from './style';

import I from '@components/Icons';
import Popup from '@components/Popup';
import Avatar from '@components/UserAvatar';
import { defaultProfileImageUrl } from '@constants/default';
import useComponentVisible from '@hooks/useComponentVisible';
import { useLogout } from '@hooks/useLogout';
import { userState } from '@recoil/atoms/user';
import theme from '@styles/theme';

export default function Header() {
  return (
    <S.HeaderLayer>
      <Logo />
      <UserAvatar />
    </S.HeaderLayer>
  );
}

const Logo = memo(() => (
  <Link to="/issue">
    <S.Logo>
      <I.Logo.Small />
    </S.Logo>
  </Link>
));

const AvatarPopup: React.FC<{
  isComponentVisible: boolean;
  onClickLogoutButton: () => void;
}> = ({ isComponentVisible, onClickLogoutButton }) => (
  <div
    css={css`
      position: absolute;
      right: 0;
      top: 3rem;
    `}
  >
    {isComponentVisible && (
      <Popup>
        <header
          css={css`
            padding: 0 !important;
          `}
        >
          <button
            type="button"
            css={css`
              width: 100%;
              height: 100%;
              font-size: 1.2rem;
              background-color: ${theme.color.background};
              cursor: pointer;
              transition: background-color 200ms;
              &:hover {
                background-color: ${theme.color.line};
                color: ${theme.color.titleActive};
              }
            `}
            onClick={onClickLogoutButton}
          >
            로그아웃
          </button>
        </header>
      </Popup>
    )}
  </div>
);

const UserAvatar = memo(() => {
  const user = useRecoilValue(userState);
  const logout = useLogout();
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleClickLogoutButton = () => {
    logout();
  };
  return (
    <div
      css={css`
        position: relative;
        z-index: 1000;
      `}
      ref={ref}
    >
      <Avatar
        as="button"
        src={user?.profileImageUrl ?? defaultProfileImageUrl}
        size="lg"
        onClick={() => {
          setIsComponentVisible((prevBoolean: boolean) => !prevBoolean);
        }}
      />
      <AvatarPopup
        isComponentVisible={isComponentVisible}
        onClickLogoutButton={handleClickLogoutButton}
      />
    </div>
  );
});

import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '@components/Indicator';
import { useIsLoggedIn } from '@hooks/useIsLoggedIn';
import { useSilentRefresh } from '@hooks/useLogin';
import { alignPosXY } from '@styles/mixin';

function Verification() {
  const isLoggedIn = useIsLoggedIn();
  const silentRefresh = useSilentRefresh();

  useEffect(() => {
    if (isLoggedIn) {
      return;
    }

    silentRefresh('/error');
  }, [isLoggedIn]);
  return !isLoggedIn ? (
    <div
      css={css`
        ${alignPosXY('fixed')}
      `}
    >
      <Loader size={16} text="로딩중입니다..." />{' '}
    </div>
  ) : (
    <Outlet />
  );
}

export default Verification;

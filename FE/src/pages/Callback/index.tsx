import { css } from '@emotion/react';
import React, { useEffect } from 'react';

import { Loader } from '@components/Indicator/Loader';
import { useLogin } from '@hooks/useLogin';
import { alignPosXY } from '@styles/mixin';

function Callback() {
  const { search } = window.location;
  const login = useLogin();

  useEffect(() => {
    login(search);
  }, [login, search]);

  return (
    <div
      css={css`
        ${alignPosXY('fixed')}
      `}
    >
      <Loader text="로그인 중입니다.." size={16} />
    </div>
  );
}

export default Callback;

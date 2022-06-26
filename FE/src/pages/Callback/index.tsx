import { css } from '@emotion/react';
import React, { useEffect } from 'react';

import { Loader } from '@components/Indicator/Loader';
import { useLogin } from '@hooks/useLogin';
import theme from '@styles/theme';

function Callback() {
  const { search } = window.location;
  const login = useLogin();

  useEffect(() => {
    login(search);
  }, [search]);

  return (
    <div
      css={css`
        height: 100vh;
        background-color: ${theme.color.background};
      `}
    >
      <Loader text="로그인 중입니다.." size={16} />
    </div>
  );
}

export default Callback;

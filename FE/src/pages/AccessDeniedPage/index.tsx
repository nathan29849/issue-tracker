import { css } from '@emotion/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from '@components/Button';
import { alignPosXY, flexbox } from '@styles/mixin';

export default function AccessDeniedPage() {
  const navigate = useNavigate();
  const handleClickNavigationButton = () => {
    navigate('/');
  };

  return (
    <div
      css={css`
        ${alignPosXY()};
      `}
    >
      <header
        css={css`
          ${flexbox({ jc: 'center' })}
          margin-bottom: 3rem;
        `}
      >
        <h1
          css={css`
            font-size: 3rem;
          `}
        >
          Access Denied
        </h1>
      </header>
      <main
        css={css`
          ${flexbox({ jc: 'center' })}
        `}
      >
        <Button size="lg" onClick={handleClickNavigationButton}>
          로그인 페이지로 돌아가기
        </Button>
      </main>
    </div>
  );
}

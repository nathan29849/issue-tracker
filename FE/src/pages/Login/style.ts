import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { alignPosXY } from '@styles/mixin';

export const CSSTextButtonMargin = css`
  margin: 1.5rem 0;
`;

export const OAuthLayer = styled.div`
  display: inline-flex;
  flex-direction: column;
  width: min-content;

  button + button {
    margin-top: 1rem;
  }
`;

export const NormalLoginLayer = styled.form``;

export const LogoLayer = styled.h1`
  margin-bottom: 3.75rem;
`;

export const LoginPageLayer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${alignPosXY()}
`;

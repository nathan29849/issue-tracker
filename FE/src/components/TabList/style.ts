import styled from '@emotion/styled';

import { TabLayer } from './Tab/style';

export const TabListLayer = styled.div`
  display: inline-flex;

  ${TabLayer} {
    border: 1px solid ${({ theme }) => theme.color.line};
    background-color: ${({ theme }) => theme.color.background};
    &:hover {
      background-color: ${({ theme }) => theme.color.inputBackground};
    }
    &:active {
      background-color: ${({ theme }) => theme.color.line};
    }
  }

  ${TabLayer}:first-child {
    border-radius: 11px 0 0 11px;
    border-right: 0;
  }

  ${TabLayer}:last-child {
    border-radius: 0 11px 11px 0;
  }
`;

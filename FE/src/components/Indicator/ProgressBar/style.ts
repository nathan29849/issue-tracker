import styled from '@emotion/styled';

import { flexbox, typoXSmall } from '@styles/mixin';

export const ProgressBarLayout = styled.div`
  display: inline-block;
  width: 15.25rem;
  background-color: inherit;
`;

export const ProgressBarLayer = styled.div`
  width: 100%;
  height: 0.5rem;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

export const Foreground = styled.div<{ fgColor: string; width: number }>`
  width: ${({ width }) => width}%;
  height: 100%;
  background-color: ${({ fgColor }) => fgColor};
  transition: width 500ms;
`;

export const Background = styled.div<{ bgColor: string }>`
  width: 100%;
  height: 100%;
  background-color: ${({ bgColor }) => bgColor};
`;

export const Detail = styled.footer`
  display: flex;
  color: ${({ theme }) => theme.color.label};
  ${typoXSmall(400)};
`;

export const Achievement = styled.div``;

export const Percentage = styled.span``;

export const TextLayer = styled.div`
  ${flexbox({ jc: 'flex-end' })};
  flex-grow: 1;
`;

export const Left = styled.span``;

export const Right = styled.span`
  margin-left: 0.5rem;
`;

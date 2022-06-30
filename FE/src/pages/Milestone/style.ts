import styled from '@emotion/styled';

import { typoSmall, flexbox } from '@styles/mixin';
import theme from '@styles/theme';

export const Header = styled.header`
  margin-bottom: 1.5rem;
  ${flexbox({ jc: 'space-between' })};
`;

export const MileStoneLabel = styled.div`
  cursor: pointer;
  color: ${(props: { labelMileStoneStatus: boolean }) =>
    props.labelMileStoneStatus ? theme.color.titleActive : theme.color.label};
  span {
    margin-left: 0.375rem;
  }
`;

export const MainHeaderLabel = styled.header`
  height: 4rem;
  padding: 1rem 2rem;
  color: ${theme.color.label};
  gap: 1rem;
  ${flexbox({ ai: 'center' })};
  ${typoSmall(700)}
`;

export const MileStoneTitle = styled.div`
  gap: 0.5rem;
  ${flexbox({ ai: 'center' })};
`;

export const MileStoneLeft = styled.div`
  ${flexbox({ dir: 'column', jc: 'center' })};
  width: 50%;
`;

export const MileStoneRight = styled.div`
  ${flexbox({ dir: 'column', ai: 'flex-end' })};
  gap: 0.5rem;
  button {
    background-color: transparent;
  }
`;

export const MileStoneItemWrapper = styled.div`
  padding: 2rem;
  background-color: ${theme.color.offWhite};
  border-top: 1px solid;
  border-color: ${theme.color.line};
  ${flexbox({ jc: 'space-between' })};
`;

export const Main = styled.div`
  min-height: 4rem;
  border: 1px solid;
  border-color: ${theme.color.line};
  border-radius: 1rem;
  overflow: hidden;
`;

export const LabelPageLayer = styled.div`
  margin-bottom: 6rem;
`;

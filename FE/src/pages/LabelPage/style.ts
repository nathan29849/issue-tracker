import styled from '@emotion/styled';

import { typoXSmall, typoSmall, flexbox } from '@styles/mixin';

export const Header = styled.header`
  margin-bottom: 1.5rem;
  ${flexbox({ jc: 'space-between' })};
`;

export const LabelCount = styled.header`
  height: 4rem;
  padding: 18px 32px;
  color: ${({ theme }) => theme.color.label};
  ${flexbox({ ai: 'center' })};
  ${typoSmall(700)}
`;

export const LabelTitle = styled.h1`
  width: 50%;
  color: ${({ theme }) => theme.color.label};
  ${typoSmall(400)};
`;

export const EditBox = styled.div`
  color: ${({ theme }) => theme.color.label};
  cursor: pointer;
  ${typoXSmall(700)};
  span {
    margin-left: 0.3125rem;
  }
`;

export const TrashBox = styled.div`
  color: ${({ theme }) => theme.color.red};
  cursor: pointer;
  ${typoXSmall(700)};
  span {
    margin-left: 0.3125rem;
  }
`;

export const LabelLeft = styled.div`
  ${flexbox({ jc: 'space-between', ai: 'center' })};
  width: 50%;
`;

export const LabelRight = styled.div`
  ${flexbox};
  gap: 1.7rem;
`;

export const LabelItemWrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.color.offWhite};
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.color.line};
  ${flexbox({ jc: 'space-between' })};
`;

export const Main = styled.div`
  min-height: 4rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.line};
  border-radius: 1rem;
  overflow: hidden;
`;

export const LabelPageLayer = styled.div``;

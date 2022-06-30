import styled from '@emotion/styled';

import { flexbox } from '@styles/mixin';

export const DetailMainLayer = styled.section`
  display: grid;
  grid-template-columns: 58.75rem 21.25rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;

export const IssueComments = styled.main`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const InputContainer = styled(IssueComments)`
  display: grid;
  grid-template-columns: 2.75rem 55rem;
  gap: 1rem;
`;

export const Inputs = styled.div`
  ${flexbox({ dir: 'column' })};
  gap: 1rem;
`;

export const UserAvatar = styled.div`
  grid-row-start: 1;
  grid-row-end: 2;
`;

export const SideBar = styled.aside`
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  margin-left: 2rem;
`;

export const Buttons = styled.footer`
  ${flexbox({ jc: 'flex-end', ai: 'center' })};
  gap: 2rem;
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  margin-top: 2rem;
  margin-bottom: 10rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.color.line};
`;
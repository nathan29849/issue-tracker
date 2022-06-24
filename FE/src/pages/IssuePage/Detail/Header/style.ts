import styled from '@emotion/styled';

import { typoDisplay, typoMedium } from '@styles/mixin';

export const DetailHeaderLayer = styled.div`
  display: grid;
  grid-template-columns: 58.75rem 21.25rem;
  grid-template-rows: repeat(2);
`;

export const Title = styled.h2``;

export const IssueTitle = styled.span`
  ${typoDisplay(400)};
  color: ${({ theme }) => theme.color.titleActive};
`;

export const IssueNumber = styled(IssueTitle)`
  color: ${({ theme }) => theme.color.label};
  margin-left: 1rem;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

export const MetaData = styled.div`
  margin-top: 1.25rem;
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const IssueStatus = styled.span`
  margin-right: 0.5rem;
`;

export const IssueDateInfo = styled.span`
  ${typoMedium(400)};
  color: ${({ theme }) => theme.color.body};
`;

export const IssueCommentInfo = styled(IssueDateInfo)`
  &::before {
    content: '∙';
    margin: 0 0.5rem;
  }
`;

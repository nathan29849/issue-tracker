import styled from '@emotion/styled';

export const IssueContainer = styled.div`
  display: grid;
  grid-template-columns: 58.75rem 21.25rem;
  grid-template-rows: repeat(3, minmax(2rem, auto));
`;

export const IssueHeader = styled.header`
  grid-column-start: 1;
  grid-column-end: 3;
`;

export const IssueMain = styled.div``;

export const IssueSideBar = styled.aside``;

export const IssueFooter = styled.footer`
  grid-column-start: 1;
  grid-column-end: 3;
`;

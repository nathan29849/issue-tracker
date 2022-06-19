import styled from '@emotion/styled';

export const Main = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.issuePage.main};
`;

export const Header = styled.header`
  position: relative;
  display: flex;
  margin-bottom: 1.5rem;
  z-index: ${({ theme }) => theme.zIndex.issuePage.header};
`;

export const HeaderLeft = styled.div`
  flex-grow: 1;
`;

export const HeaderRight = styled.div`
  display: flex;
  gap: 8px;
`;

export const IssuePageLayer = styled.div``;

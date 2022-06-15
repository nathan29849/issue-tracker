import styled from '@emotion/styled';
import { flexbox } from '@styles/mixin';

export const NavigationLayer = styled.header`
  height: 4rem;
  padding: 0 2rem;
  ${flexbox({ dir: 'row', jc: 'space-between', ai: 'center' })}
`;

export const LeftLayer = styled.nav`
  gap: 1.5rem;
  ${flexbox({ dir: 'row', jc: 'space-between', ai: 'center' })}
`;

export const RightLayer = styled.nav`
  gap: 1.5rem;
  ${flexbox({ dir: 'row', jc: 'flex-start', ai: 'center' })}
`;

export const OpenedIssue = styled.div`
  color: ${({ theme }) => theme.color.titleActive};
  span {
    margin-left: 0.375rem;
  }
`;

export const ClosedIssue = styled.div`
  color: ${({ theme }) => theme.color.label};

  span {
    margin-left: 0.375rem;
  }
`;

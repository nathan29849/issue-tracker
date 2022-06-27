import styled from '@emotion/styled';

import { flexbox, typoMedium, typoSmall } from '@styles/mixin';

export const ItemLayer = styled.div`
  position: relative;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.color.offWhite};
  border-top: 1px solid;
  border-color: ${({ theme }) => theme.color.line};
  border-radius: ${(props: { lastIdx: any }) =>
    props.lastIdx ? '0 0 1rem 1rem' : ''};
  ${flexbox({ dir: 'row', jc: 'flex-start', ai: 'flex-start' })};
`;

export const ContentLayer = styled.div`
  ${flexbox({ dir: 'column', jc: 'flex-start', ai: 'flex-start' })}
  gap: 1rem;
  margin-left: 1.5rem;
`;

export const Title = styled.h4`
  display: inline-block;
  margin-left: 10px;
  ${typoMedium(700)}
`;

export const Description = styled.span`
  color: ${({ theme }) => theme.color.label};
  margin-right: 1rem;
  ${typoSmall(400)}
`;

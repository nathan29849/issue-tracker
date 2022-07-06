import styled from '@emotion/styled';

import { typoLarge, typoXSmall, flexbox } from '@styles/mixin';
import { moveDownAnimation } from '@utils/animation';

export const FormWrapper = styled.form`
  padding: 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.line};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.offWhite};
  box-shadow: 0 0.5rem 1.5rem ${({ theme }) => theme.color.line};

  animation: ${moveDownAnimation} 300ms ease;
`;

export const FormTitle = styled.div`
  margin-bottom: 2rem;
  ${typoLarge(400)}
`;

export const FormContents = styled.div`
  ${flexbox({ dir: 'column' })};
`;

export const DueDateErrorText = styled.div`
  position: absolute;
  top: -1rem;
  right: 0;
  color: ${({ theme }) => theme.color.red};
  ${typoXSmall(400)}
`;

export const FormInputWrapper = styled.div`
  position: relative;
  margin-bottom: 1rem;
  ${flexbox({ dir: 'row' })};
  gap: 1rem;
`;

export const FormButtonWrapper = styled.div`
  margin-left: auto;
`;

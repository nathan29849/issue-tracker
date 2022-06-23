import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { typoLarge, flexbox } from '@styles/mixin';
import { moveDownAnimation, moveUpAnimation } from '@utils/animation';

export const FormWrapper = styled.div`
  padding: 2rem;
  margin-bottom: 1.5rem;
  border: 1px solid;
  border-color: ${({ theme }) => theme.color.line};
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.color.offWhite};
  box-shadow: 0 0.5rem 1.5rem ${({ theme }) => theme.color.line};
  ${(props: { title: string }) => {
    /**
     * TODO 로직 수정 필요 => 닫기 버튼을 눌렀을때는 애니메이션을 어떻게 처리 해줄지?
     */
    if (props.title) {
      return css`
        animation: ${moveDownAnimation} 300ms ease;
      `;
    }
    return css`
      animation: ${moveUpAnimation} 300ms ease;
    `;
  }};
  ${flexbox({ jc: 'space-between' })};
`;

export const FormTitle = styled.div`
  ${typoLarge(400)}
`;

export const RefreshButton = styled.button`
  position: absolute;
  left: 0;
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border: none;
`;

export const FormInnerWrapper = styled.div`
  position: relative;
  ${flexbox({ ai: 'center' })};
  gap: 1rem;
`;

export const FormLeftInner = styled.div`
  ${flexbox({ dir: 'column', jc: 'space-between', ai: 'flex-end' })};
`;

export const FormRightInner = styled.div`
  padding: 24px 0;
  ${flexbox({ dir: 'column' })};
  gap: 1rem;
`;

export const FormContents = styled.div`
  ${flexbox({ dir: 'column' })};
`;

export const FormButtonWrapper = styled.div`
  margin-left: auto;
`;

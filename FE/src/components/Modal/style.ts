import styled from '@emotion/styled';

import { flexbox } from '@styles/mixin';

export const ModalCloseBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const ModalContent = styled.div`
  position: relative;
  top: 50%;
  ${flexbox({ dir: 'column', ai: 'center' })};
  padding: 2rem 3rem;
  transform: translateY(-50%);
  background-color: #fff;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  max-width: 30rem;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  margin: 0 auto;

  header {
    margin-bottom: 2rem;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
`;

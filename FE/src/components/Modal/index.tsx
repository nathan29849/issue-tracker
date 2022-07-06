import { css } from '@emotion/react';
import ReactDom from 'react-dom';

import * as S from './style';

import { Button } from '@components/Button';

interface ModalProps {
  title: string;
  handleCancelClick: () => void;
  handleSubmit: () => void;
}

export default function Modal({
  title,
  handleCancelClick,
  handleSubmit,
}: ModalProps) {
  return ReactDom.createPortal(
    <>
      <S.ModalOverlay />
      <S.ModalWrapper>
        <S.ModalContent>
          <header>{title}</header>
          <div>
            <Button
              outlined
              type="button"
              onClick={handleCancelClick}
              css={css`
                margin-right: 1rem;
              `}
            >
              닫기
            </Button>
            <Button type="button" onClick={handleSubmit}>
              확인
            </Button>
          </div>
        </S.ModalContent>
      </S.ModalWrapper>
    </>,
    document.querySelector('#modal-root')!,
  );
}

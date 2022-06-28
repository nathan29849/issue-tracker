import ReactDom from 'react-dom';

import * as S from './style';

interface ModalProps {
  children: React.ReactNode;
}

export default function Modal({ children }: ModalProps) {
  return ReactDom.createPortal(
    <>
      <S.ModalOverlay />
      <S.ModalWrapper>
        <S.ModalContent>{children}</S.ModalContent>
      </S.ModalWrapper>
    </>,
    document.querySelector('#modal-root')!,
  );
}

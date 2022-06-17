import * as S from './style';

export default function Popup({ children }: { children: React.ReactNode }) {
  return <S.FilterPopup>{children}</S.FilterPopup>;
}

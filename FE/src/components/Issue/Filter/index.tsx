import * as S from './style';

export default function Filter({ ...props }) {
  return (
    <S.FilterLayer>
      <span>{props.label}</span>
    </S.FilterLayer>
  );
}

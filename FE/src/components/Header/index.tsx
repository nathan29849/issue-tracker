import * as S from './style';

import I from '@components/Icons';

export default function Header() {
  return (
    <S.HeaderLayer>
      <S.Logo>
        <I.Logo.Small />
      </S.Logo>
      <S.UserAvatar>
        <S.Temp />
      </S.UserAvatar>
    </S.HeaderLayer>
  );
}

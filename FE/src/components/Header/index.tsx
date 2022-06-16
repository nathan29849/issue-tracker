import { Link } from 'react-router-dom';

import * as S from './style';

import I from '@components/Icons';

const defaultImageUrl =
  'https://www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg';

export default function Header() {
  return (
    <S.HeaderLayer>
      <Link to="/issue">
        <S.Logo>
          <I.Logo.Small />
        </S.Logo>
      </Link>
      <S.UserAvatar>
        <S.Image src={defaultImageUrl} />
      </S.UserAvatar>
    </S.HeaderLayer>
  );
}

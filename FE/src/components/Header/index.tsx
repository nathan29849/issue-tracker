import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import * as S from './style';

import I from '@components/Icons';
import UserAvatar from '@components/UserAvatar';
import { userState } from '@recoil/atoms/user';

const defaultImageUrl =
  'https://www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg';

export default function Header() {
  const user = useRecoilValue(userState);

  return (
    <S.HeaderLayer>
      <Link to="/issue">
        <S.Logo>
          <I.Logo.Small />
        </S.Logo>
      </Link>

      <div>
        <UserAvatar
          as="button"
          src={user?.profileImageUrl ?? defaultImageUrl}
          size="lg"
        />
      </div>
    </S.HeaderLayer>
  );
}

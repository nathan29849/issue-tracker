import React, { memo } from 'react';

import * as S from './style';

import UserAvatar from '@components/UserAvatar';

interface IUserAvatarLayerProps {
  profileImage: string;
}

const UserAvatarLayer: React.FC<IUserAvatarLayerProps> = ({ profileImage }) => (
  <S.UserAvatar>
    <UserAvatar src={profileImage} size="lg" alt="유저 이미지" />
  </S.UserAvatar>
);

export default memo(UserAvatarLayer);

import React, { memo } from 'react';

import * as S from './style';

import { OverridableProps } from '@utils/types';

interface Props {
  src: string;
  size?: 'sm' | 'lg';
  alt?: string;
  fill?: string;
}

// T라는 리액트 엘리먼트의 props와 위에 정의한 Props의 props, as props를 가지는 type
type UserAvatarProps<T extends React.ElementType> = OverridableProps<T, Props>;

const UserAvatar = <T extends React.ElementType = 'div'>({
  alt = '',
  size = 'sm',
  src,
  fill,
  as,
  ...restProps
}: UserAvatarProps<T>) => (
  <S.UserAvatar as={as ?? 'div'} size={size} fill={fill} {...restProps}>
    {fill ? <S.Fill fill={fill} /> : <S.Image src={src} alt={alt} />}
  </S.UserAvatar>
);

export default memo(UserAvatar);

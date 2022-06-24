import React, { useState } from 'react';

import * as S from './style';

import { Button, TextButton } from '@components/Button';
import I from '@components/Icons';
import { Textarea, Input } from '@components/Input';
import UserAvatar from '@components/UserAvatar';

// ADD ISSUE
export const NewMain = () => {
  // TODO: 커스텀 훅으로 바꾸기
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);
  const onChange2 = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue2(e.target.value);
  return (
    <S.DetailMainLayer as="form">
      <S.Inputs>
        <S.UserAvatar>
          <UserAvatar
            src="https://www.stignatius.co.uk/wp-content/uploads/2020/10/default-user-icon.jpg"
            size="lg"
          />
        </S.UserAvatar>
        <Input
          width="100%"
          placeholder="제목"
          size="md"
          value={value2}
          onChange={onChange2}
        />
        <Textarea width="100%" value={value} onChange={onChange} />
      </S.Inputs>
      <S.SideBar>사이드바</S.SideBar>
      <S.Buttons>
        <TextButton size="md" type="button">
          <I.XMark />
          작성 취소
        </TextButton>
        <Button size="md" type="button">
          완료
        </Button>
      </S.Buttons>
    </S.DetailMainLayer>
  );
};

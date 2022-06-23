import { useState } from 'react';

import * as S from './formStyle';

import { Button } from '@components/Button';
import I from '@components/Icons';
import { Input } from '@components/Input';
import { Label } from '@components/Label';
import RadioSelection from '@components/RadioSelection';

export default function Form({ title }: { title: string }) {
  const [labelText, setLabelText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [colorText, setColorText] = useState('');
  const [complelteBtn, setComplelteBtn] = useState(false);
  const handleLabelText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelText(e.target.value);
  };

  const handleDescriptionText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionText(e.target.value);
  };

  const handleColorText = (e: React.MouseEvent<HTMLElement>) => {};

  return (
    <S.FormWrapper title={title}>
      <S.FormLeftInner>
        <S.FormTitle>{title}</S.FormTitle>
        <Label bgColor="#EFF0F6" darkText>
          레이블 이름
        </Label>
        <div />
      </S.FormLeftInner>
      <S.FormContents>
        <S.FormRightInner>
          <Input
            type="text"
            id="label"
            width={904}
            value={labelText}
            placeholder="레이블 이름"
            onChange={handleLabelText}
          />
          <Input
            type="text"
            id="description"
            width={904}
            value={descriptionText}
            placeholder="설명(선택)"
            onChange={handleDescriptionText}
          />
          <S.FormInnerWrapper>
            <Input id="color" width={240} placeholder="배경 색상" />
            <S.RefreshButton type="button" onClick={handleColorText}>
              <I.Refresh />
            </S.RefreshButton>
            <RadioSelection.Container title="텍스트 색상">
              <RadioSelection.Option checked>어두운 색</RadioSelection.Option>
              <RadioSelection.Option>밝은 색</RadioSelection.Option>
            </RadioSelection.Container>
          </S.FormInnerWrapper>
        </S.FormRightInner>
        <S.FormButtonWrapper>
          <Button disabled={!complelteBtn}>
            <I.Plus />
            완료
          </Button>
        </S.FormButtonWrapper>
      </S.FormContents>
    </S.FormWrapper>
  );
}

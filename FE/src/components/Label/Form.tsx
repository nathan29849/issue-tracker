import { css } from '@emotion/react';
import { useState } from 'react';

import * as S from './formStyle';

import { Button } from '@components/Button';
import I from '@components/Icons';
import { Input } from '@components/Input';
import { Label } from '@components/Label';
import Popup from '@components/Popup';
import RadioSelection from '@components/RadioSelection';
import useComponentVisible from '@hooks/useComponentVisible.jsx';
import { typoXSmall, flexbox } from '@styles/mixin';
import theme from '@styles/theme';

export default function Form({ title }: { title: string }) {
  const radioColorText = ['어두운색', '밝은색'];
  const defaultColors = [
    '#B60205',
    '#D93F0B',
    '#FBCA04',
    '#0E8A16',
    '#006B75',
    '#1D76DB',
    '#0052CC',
    '#5319E7',
    '#E99695',
    '#F9D0C4',
    '#FEF2C0',
    '#C2E0C6',
    '#BFDADC',
    '#C5DEF5',
    '#BFD4F2',
    '#D4C5F9',
  ];
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [labelText, setLabelText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [bgColor, setBgColor] = useState('#EFF0F6');
  const [radioState, setRadioState] = useState('어두운색');

  const handleLabelText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelText(e.target.value);
  };

  const handleDescriptionText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionText(e.target.value);
  };

  const handleBgColor = (e: React.MouseEvent<HTMLElement>) => {
    // 랜덤 컬러 색상 만드는 함수
    const randomColor = `#${Math.round(Math.random() * 0xffffff)
      .toString(16)
      .toUpperCase()}`;
    setBgColor(randomColor);
  };

  const handleColorText = (color: string) => {
    setRadioState(color);
  };

  const onColorPopup = () => {
    setIsComponentVisible(true);
  };

  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '') e.target.value = '#';
    setBgColor(e.target.value);
  };

  const handleColorClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.target as HTMLButtonElement;
    e.stopPropagation();
    setBgColor(button.value);
    setIsComponentVisible(false);
  };

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
            value={labelText || ''}
            placeholder="레이블 이름"
            onChange={handleLabelText}
          />
          <Input
            type="text"
            id="description"
            width={904}
            value={descriptionText || ''}
            placeholder="설명(선택)"
            onChange={handleDescriptionText}
          />
          <S.FormInnerWrapper>
            <S.ColorWrapper>
              <Input
                type="text"
                id="color"
                value={bgColor || ''}
                width={240}
                placeholder="배경 색상"
                onClick={onColorPopup}
                onChange={onChangeColor}
                maxLength={7}
              />
              <S.RefreshButton type="button" onClick={handleBgColor}>
                <I.Refresh color={bgColor} />
              </S.RefreshButton>
              <div
                ref={ref}
                css={css`
                  position: absolute;
                  left: 0;
                  top: 3rem;
                `}
              >
                {isComponentVisible && (
                  <Popup>
                    <div
                      css={css`
                        margin-top: 1rem;
                        padding: 0 1rem;
                        ${typoXSmall(400)}
                        ${flexbox({ ai: 'center' })}
                      `}
                    >
                      Choose from default colors
                    </div>
                    <div
                      css={css`
                        padding: 0.5rem 1rem;
                        background-color: ${theme.color.offWhite};
                        color: ${theme.color.line};
                        ${flexbox({ ai: 'center' })}
                        gap: 2px;
                        flex-wrap: wrap;
                      `}
                    >
                      {defaultColors.map(color => (
                        <button
                          type="button"
                          key={color}
                          value={color}
                          css={css`
                            width: 1.5rem;
                            height: 1.5rem;
                            border-radius: 5px;
                            background-color: ${color};
                            cursor: pointer;
                          `}
                          onClick={handleColorClick}
                        />
                      ))}
                    </div>
                  </Popup>
                )}
              </div>
            </S.ColorWrapper>
            <RadioSelection.Container title="텍스트 색상">
              {radioColorText.map((radioColor: string) => (
                <RadioSelection.Option
                  key={radioColor}
                  checked={radioState === radioColor}
                  onClick={() => handleColorText(radioColor)}
                >
                  {radioColor}
                </RadioSelection.Option>
              ))}
            </RadioSelection.Container>
          </S.FormInnerWrapper>
        </S.FormRightInner>
        <S.FormButtonWrapper>
          <Button
            type="button"
            disabled={labelText === '' || bgColor === '' || radioState === ''}
          >
            <I.Plus />
            완료
          </Button>
        </S.FormButtonWrapper>
      </S.FormContents>
    </S.FormWrapper>
  );
}

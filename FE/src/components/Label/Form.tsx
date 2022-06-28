import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { useMutation } from 'react-query';

import * as S from './formStyle';

import { Button } from '@components/Button';
import I from '@components/Icons';
import { Input } from '@components/Input';
import { Label } from '@components/Label';
import Popup from '@components/Popup';
import RadioSelection from '@components/RadioSelection';
import {
  radioColorText,
  initBgColor,
  defaultBgColors,
} from '@constants/default';
import useComponentVisible from '@hooks/useComponentVisible';
import { ILabelTypes } from '@recoil/atoms/label';
import { typoXSmall, flexbox } from '@styles/mixin';
import theme from '@styles/theme';

interface FormProps {
  title: string;
  labelData?: ILabelTypes;
  onEdit: boolean;
  handleCloseForm: (id?: number) => void;
}

export default function Form({
  title,
  labelData,
  onEdit,
  handleCloseForm,
}: FormProps) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const [labelText, setLabelText] = useState(labelData?.title || '');
  const [descriptionText, setDescriptionText] = useState(
    labelData?.description || '',
  );
  const [bgColor, setBgColor] = useState(
    labelData?.backgroundColor || initBgColor,
  );
  const [radioState, setRadioState] = useState(
    labelData?.textColor === 'BLACK'
      ? '어두운색'
      : '밝은색' || radioColorText[0],
  );

  const handleLabelText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLabelText(e.target.value);
  };

  const handleDescriptionText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescriptionText(e.target.value);
  };

  const handleBgColor = () => {
    // 랜덤 컬러 색상 만드는 함수
    const randomColor = new Array(3).fill(0).reduce((prev: string) => {
      prev += Math.floor(Math.random() * 127 + 128)
        .toString(16)
        .toUpperCase();
      return prev;
    }, '#');

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

  const createLabelPost = useMutation((newLabel: ILabelTypes) =>
    fetch('/issue/label', {
      method: 'POST',
      body: JSON.stringify(newLabel),
    }),
  );

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newLabel = {
      id: 3,
      title: labelText,
      description: descriptionText,
      backgroundColor: bgColor,
      textColor: radioState === '어두운색' ? 'BLACK' : 'WHITE',
    };

    createLabelPost.mutate(newLabel);
  };

  useEffect(() => {
    // 임시로 응답이 정상적으로 왔을때 처리 차후는 Persist mutation 적용필요
    if (createLabelPost.isSuccess) {
      alert('label add success');
      handleCloseForm();
    }
  }, [createLabelPost, handleCloseForm]);

  return (
    <S.FormWrapper title={title} onSubmit={handleSubmit}>
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
            width={904}
            value={labelText || ''}
            placeholder="레이블 이름"
            onChange={handleLabelText}
          />
          <Input
            type="text"
            width={904}
            value={descriptionText || ''}
            placeholder="설명(선택)"
            onChange={handleDescriptionText}
          />
          <S.FormInnerWrapper>
            <S.ColorWrapper>
              <Input
                type="text"
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
                      {defaultBgColors.map(color => (
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
          {onEdit ? (
            <>
              <Button
                outlined
                css={css`
                  margin-right: 1rem;
                `}
                onClick={() => handleCloseForm(labelData?.id)}
              >
                취소
              </Button>
              <Button
                type="submit"
                disabled={
                  labelText === '' || bgColor === '' || radioState === ''
                }
              >
                <I.Edit />
                완료
              </Button>
            </>
          ) : (
            <Button
              type="submit"
              disabled={labelText === '' || bgColor === '' || radioState === ''}
            >
              <I.Plus />
              완료
            </Button>
          )}
        </S.FormButtonWrapper>
      </S.FormContents>
    </S.FormWrapper>
  );
}

import React from 'react';

import * as S from './style';

import theme from '@styles/theme';
import { OverridableProps } from '@utils/types';

type ProgressBarProps<T extends React.ElementType> = OverridableProps<
  T,
  {
    width: number;
    detail?: boolean;
    bgColor?: string;
    fgColor?: string;
    leftText?: string;
    rightText?: string;
  }
>;

const ProgressBar = <T extends React.ElementType = 'div'>({
  width,
  detail = false,
  bgColor = theme.color.inputBackground,
  fgColor = theme.color.blue,
  leftText = '',
  rightText = '',
  as,
  ...restProps
}: ProgressBarProps<T>) => (
  <S.ProgressBarLayout>
    <S.ProgressBarLayer as={as} {...restProps}>
      <S.Background bgColor={bgColor}>
        <S.Foreground fgColor={fgColor} width={width} />
      </S.Background>
    </S.ProgressBarLayer>
    {detail && (
      <S.Detail>
        <S.Achievement>
          <S.Percentage>{width}%</S.Percentage>
        </S.Achievement>
        <S.TextLayer>
          {leftText && <S.Left>{leftText}</S.Left>}
          {rightText && <S.Right>{rightText}</S.Right>}
        </S.TextLayer>
      </S.Detail>
    )}
  </S.ProgressBarLayout>
);

export default ProgressBar;

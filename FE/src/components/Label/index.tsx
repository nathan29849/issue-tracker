import React from 'react';

import * as S from './style';

import I from '@components/Icons';
import { OverridableProps } from '@utils/types';

type LabelProps<T extends React.ElementType> = OverridableProps<
  T,
  {
    children: React.ReactNode;
    darkText?: boolean;
    bgColor?: string;
    outlined?: boolean;
  }
>;

type IssueLabelProps<T extends React.ElementType> = OverridableProps<
  T,
  {
    closed?: boolean;
  }
>;

export const Label = <T extends React.ElementType>({
  children,
  darkText = false,
  bgColor = '#000',
  outlined = false,
  as,
  ...restProps
}: LabelProps<T>) =>
  outlined ? (
    <S.OutlinedButton as={as ?? 'button'} type="button" {...restProps}>
      <span>{children}</span>
    </S.OutlinedButton>
  ) : (
    <S.LabelButton
      as={as ?? 'button'}
      type="button"
      bgColor={bgColor}
      darkText={darkText}
      {...restProps}
    >
      <span>{children}</span>
    </S.LabelButton>
  );

export const IssueLabel = <T extends React.ElementType>({
  closed = false,
  as,
  ...restProps
}: IssueLabelProps<T>) =>
  closed ? (
    <S.IssueLabelButton
      as={as ?? 'button'}
      type="button"
      closed={closed}
      {...restProps}
    >
      <I.Bucket />
      <span>닫힌 이슈</span>
    </S.IssueLabelButton>
  ) : (
    <S.IssueLabelButton
      as={as ?? 'button'}
      type="button"
      closed={closed}
      {...restProps}
    >
      <I.Circle.Alert />
      <span>열린 이슈</span>
    </S.IssueLabelButton>
  );

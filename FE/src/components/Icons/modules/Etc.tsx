import * as React from 'react';

import * as S from './style';

interface Props {
  fontSize?: number;
  color?: string;
}

export function Search(props: Props) {
  return <S.Icon className="ic-search" {...props} />;
}

export function Smile(props: Props) {
  return <S.Icon className="ic-smile" {...props} />;
}

export function Plus(props: Props) {
  return <S.Icon className="ic-plus" {...props} />;
}

export function XMark(props: Props) {
  return <S.Icon className="ic-x-mark" {...props} />;
}

export function Tag(props: Props) {
  return <S.Icon className="ic-tag" {...props} />;
}

export function MileStone(props: Props) {
  return <S.Icon className="ic-milestone" {...props} />;
}

export function Bucket(props: Props) {
  return <S.Icon className="ic-archive" {...props} />;
}

export function Edit(props: Props) {
  return <S.Icon className="ic-edit" {...props} />;
}

export function Trash(props: Props) {
  return <S.Icon className="ic-trash" {...props} />;
}

export function Refresh(props: Props) {
  return <S.Icon className="ic-refresh" {...props} />;
}

export function Calendar(props: Props) {
  return <S.Icon className="ic-calendar" {...props} />;
}

export function Clip(props: Props) {
  return <S.Icon className="ic-paper-clip" {...props} />;
}

export function ArrowDown(props: Props) {
  return <S.Icon className="ic-arrow-down" {...props} />;
}

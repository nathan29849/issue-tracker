import * as React from 'react';

import * as S from './style';

interface IEtc {
  fontSize?: number;
  color?: string;
}

export function Search(props: IEtc) {
  return <S.Icon className="ic-search" {...props} />;
}

export function Smile(props: IEtc) {
  return <S.Icon className="ic-smile" {...props} />;
}

export function Plus(props: IEtc) {
  return <S.Icon className="ic-plus" {...props} />;
}

export function XMark(props: IEtc) {
  return <S.Icon className="ic-x-mark" {...props} />;
}

export function Tag(props: IEtc) {
  return <S.Icon className="ic-tag" {...props} />;
}

export function MileStone(props: IEtc) {
  return <S.Icon className="ic-milestone" {...props} />;
}

export function Bucket(props: IEtc) {
  return <S.Icon className="ic-archive" {...props} />;
}

export function Edit(props: IEtc) {
  return <S.Icon className="ic-edit" {...props} />;
}

export function Trash(props: IEtc) {
  return <S.Icon className="ic-trash" {...props} />;
}

export function Refresh(props: IEtc) {
  return <S.Icon className="ic-refresh" {...props} />;
}

export function Calendar(props: IEtc) {
  return <S.Icon className="ic-calendar" {...props} />;
}

export function Clip(props: IEtc) {
  return <S.Icon className="ic-paper-clip" {...props} />;
}

export function ArrowDown(props: IEtc) {
  return <S.Icon className="ic-arrow-down" {...props} />;
}

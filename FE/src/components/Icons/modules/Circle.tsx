import * as React from 'react';

import * as S from './style';

interface ICircle {
  fontSize?: number;
  color?: string;
}

function Plain(props: ICircle) {
  return <S.Icon className="ic-check-off-circle" {...props} />;
}

function Check(props: ICircle) {
  return <S.Icon className="ic-check-on-circle" {...props} />;
}

function Alert(props: ICircle) {
  return <S.Icon className="ic-alert" {...props} />;
}

export default {
  Plain,
  Check,
  Alert,
};

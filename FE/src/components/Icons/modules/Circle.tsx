import * as React from 'react';

import * as S from './style';

interface Circle {
  fontSize?: number;
  color?: string;
}

function Plain(props: Circle) {
  return <S.Icon className="ic-check-off-circle" {...props} />;
}

function Check(props: Circle) {
  return <S.Icon className="ic-check-on-circle" {...props} />;
}

function Alert(props: Circle) {
  return <S.Icon className="ic-alert" {...props} />;
}

export default {
  Plain,
  Check,
  Alert,
};

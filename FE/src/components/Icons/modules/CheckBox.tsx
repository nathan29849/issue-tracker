import * as React from 'react';

import * as S from './style';

interface CheckBox {
  fontSize?: number;
  color?: string;
}

interface ContainerProps extends CheckBox {
  children: React.ReactNode;
  className: string;
}

function Container({ children, className, fontSize, color }: ContainerProps) {
  return (
    <S.ComplexIcon className={className} fontSize={fontSize} color={color}>
      {children}
    </S.ComplexIcon>
  );
}

function Initial(props: CheckBox) {
  return (
    <Container className="ic-checkbox-initial" {...props}>
      <i className="path1" />
      <i className="path2 accent" />
    </Container>
  );
}

function Active(props: CheckBox) {
  return (
    <Container className="ic-checkbox-active" {...props}>
      <i className="path1 accent" />
      <i className="path2" />
    </Container>
  );
}

function Disable(props: CheckBox) {
  return (
    <Container className="ic-checkbox-disable" {...props}>
      <i className="path1 accent" />
      <i className="path2" />
    </Container>
  );
}

export default {
  Initial,
  Active,
  Disable,
};

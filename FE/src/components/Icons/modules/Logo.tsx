import * as S from './style';

const smallSize = 32;
function Small() {
  return <S.Logo className="ic-logo" fontSize={smallSize} />;
}

const bigSize = 56;
function Big() {
  return <S.Logo className="ic-logo" fontSize={bigSize} />;
}

export default {
  Small,
  Big,
};

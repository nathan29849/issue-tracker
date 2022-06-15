import * as S from './style';

const smallSize = 40;
function Small() {
  return <S.Logo className="ic-logo" fontSize={smallSize} />;
}

const bigSize = 72;
function Big() {
  return <S.Logo className="ic-logo" fontSize={bigSize} />;
}

export default {
  Small,
  Big,
};

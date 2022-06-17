import { useNavigate } from 'react-router-dom';

import * as S from './style';

import { LoginButton, TextButton } from '@components/Button';
import I from '@components/Icons';
import theme from '@styles/theme';

export default function Login() {
  const navigate = useNavigate();

  return (
    <S.LoginPageLayer>
      <S.LogoLayer>
        <I.Logo.Big />
      </S.LogoLayer>

      <S.OAuthLayer>
        <LoginButton
          bgColor={theme.color.titleActive}
          textColor={theme.color.offWhite}
          as="a"
        >
          GitHub 계정으로 로그인
        </LoginButton>
        <LoginButton
          bgColor="#f9e000"
          textColor="#181600"
          as="a"
          onClick={() => {
            navigate('/issue');
          }}
        >
          Kakao 계정으로 로그인
        </LoginButton>
      </S.OAuthLayer>

      <TextButton size="sm" disabled css={S.CSSTextButtonMargin}>
        or
      </TextButton>

      <S.NormalLoginLayer>
        <LoginButton
          bgColor={theme.color.blue}
          textColor={theme.color.offWhite}
          disabled
        >
          아이디로 로그인
        </LoginButton>
      </S.NormalLoginLayer>

      <TextButton size="sm" css={S.CSSTextButtonMargin}>
        회원가입
      </TextButton>
    </S.LoginPageLayer>
  );
}

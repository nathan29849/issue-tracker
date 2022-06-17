import { useNavigate } from 'react-router-dom';

import * as S from './style';

import { LoginButton, TextButton } from '@components/Button';
import I from '@components/Icons';
import theme from '@styles/theme';

export default function Login() {
  const navigate = useNavigate();

  const handleLoginClick = async () => {
    const serverUrl = 'http://13.125.92.201/api/oauth/github';
    try {
      const data = await fetch(serverUrl).then(response =>
        // get accessToken, refreshToken
        // cookie save
        console.log(response.json()),
      );
      // alert('이동');
      // navigate('/issue');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <S.LoginPageLayer>
      <S.LogoLayer>
        <I.Logo.Big />
      </S.LogoLayer>

      <S.OAuthLayer>
        <LoginButton
          bgColor={theme.color.titleActive}
          textColor={theme.color.offWhite}
          onClick={handleLoginClick}
        >
          GitHub 계정으로 로그인
        </LoginButton>

        <LoginButton
          bgColor="#f9e000"
          textColor="#9c9a82"
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

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import * as S from './style';

import { LoginButton, TextButton } from '@components/Button';
import I from '@components/Icons';
import { userState } from '@recoil/atoms/user';
import theme from '@styles/theme';

export default function Login() {
  const user = useRecoilValue(userState);
  const navigate = useNavigate();

  useEffect(() => {
    // 유저 정보가 있으면 로그인
    if (user !== null) {
      navigate('/issue');
    }

    // 유저 정보가 없는 경우, 액세스 토큰을 한번 보내보고 만료가 되지 않은 경우에 로그인 및 유저 정보 세팅
  }, [user]);

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
          href={`${process.env.TEAM30_GITHUB_OAUTH_URL}`}
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

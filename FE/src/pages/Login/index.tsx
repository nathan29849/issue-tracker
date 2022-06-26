import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import * as S from './style';

import { LoginButton, TextButton } from '@components/Button';
import I from '@components/Icons';
import { useSilentRefresh } from '@hooks/useLogin';
import { userState } from '@recoil/atoms/user';
import theme from '@styles/theme';

export default function Login() {
  const user = useRecoilValue(userState);

  const navigate = useNavigate();
  const silentRefresh = useSilentRefresh();

  useEffect(() => {
    // 유저 정보가 있으면 로그인
    // 로그인 되어있는 유저가 로그인 페이지로 이동하는 경우.
    if (user !== null) {
      navigate('/issue');
      return;
    }

    // 유저 정보가 없으면 Silent Refresh
    // 성공시 user 세팅 -> 다시한번 Effect가 실행되면서 issue페이지로 이동
    silentRefresh();
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

import { css } from '@emotion/react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { githubLogin } from '../../apis/login';

import { Loader } from '@components/Indicator/Loader';
import { userState } from '@recoil/atoms/user';
import theme from '@styles/theme';

function Callback() {
  const navigate = useNavigate();
  const { search } = window.location;
  const setUser = useSetRecoilState(userState);

  useEffect(() => {
    const login = async (searchParams: string) => {
      try {
        const user = await githubLogin(searchParams);
        console.log(user);
        setUser(user);
      } catch (error) {
        console.error(error);
      } finally {
        navigate('/');
      }
    };
    login(search);
  }, [search]);

  return (
    <div
      css={css`
        height: 100vh;
        background-color: ${theme.color.background};
      `}
    >
      <Loader text="로그인 중입니다.." size={16} />
    </div>
  );
}

export default Callback;

import React, { useState, useEffect } from 'react';
import { Login } from 'src/components';
import { LoginInput } from 'src/components/common/Account/Login/Input';
import * as S from './styled';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { LoginBottom } from 'src/components/common/Account/Login/Bottom';
import { host } from 'src/host';

export const LoginPage: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [cookies, SetCookies] = useCookies(['jwt']);
  const login = () => {
    const data = { user_id: userId, user_pw: userPw };
    axios.post(`http://${host.key}/auth/login`, data).then((res) => {
      if (res.data.error) {
        console.log('1');
      } else {
        console.log(res.data);
        SetCookies('jwt', res.data.token);
        localStorage.setItem('Authorization', res.data.token);
      }
    });
  };

  return (
    <>
      <S.LoginBackground>
        <S.Center>
          <Login />
          <LoginInput
            Login={login}
            setUserId={setUserId}
            setUserPw={setUserPw}
          />
          <LoginBottom />
        </S.Center>
      </S.LoginBackground>
    </>
  );
};

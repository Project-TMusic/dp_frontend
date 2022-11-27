import React, { useState, useEffect } from 'react';
import { Login } from 'src/components';
import { LoginInput } from 'src/components/common/Account/Login/Input';
import * as S from './styled';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { LoginBottom } from 'src/components/common/Account/Login/Bottom';

export const LoginPage: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [cookies, SetCookies] = useCookies(['id']);
  const [user, setUser] = useState({ username: '', status: false });
  const login = () => {
    const data = { username: userId, password: userPw };
    axios.post('http://localhost:3001/auth/login', data).then((res) => {
      if (res.data.error) {
        console.log('1');
      } else {
        console.log(res.data);
        SetCookies('id', res.data.token);
        localStorage.setItem('Authorization', res.data.token);
      }
    });
  };

  useEffect(() => {
    axios
      .get('http://localhost:3001/auth/authenticate', {
        headers: {
          Authorization: localStorage.getItem('Authorization') as any,
        },
      })
      .then((res) => {
        if (res.data.error) {
          console.log(0);
        } else {
          console.log(user);
          setUser({
            username: res.data.username,
            status: true,
          });
        }
      });
  }, []);
  console.log(user);
  return (
    <>
      <S.LoginBackground>
        <S.Center>
          <Login username={user.username} status={user.status} />
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

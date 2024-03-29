import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
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
  const [user, setUser] = useState({ username: '', status: false });
  const navigate = useNavigate();
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

  useEffect(() => {
    if (localStorage.getItem('Authorization')) {
      navigate('/');
    }
    axios
      .get(`http://${host.key}/auth/authenticate`, {
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

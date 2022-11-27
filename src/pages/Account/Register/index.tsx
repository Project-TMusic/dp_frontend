import React, { useState } from 'react';
import { Register } from 'src/components';
import { RegisterBottom } from 'src/components/common/Account/Register/Bottom';
import { RegisterInput } from 'src/components/common/Account/Register/Input';
import * as S from './styled';

//backend
import axios from 'axios';
import { host } from 'src/host';
import { useNavigate } from 'react-router';

export const RegisterPage: React.FC = () => {
  const [username, setUserName] = useState('');
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [userCheckPw, setUserCheckPw] = useState('');
  const navigate = useNavigate();
  const registerData = {
    username: username,
    user_id: userId,
    user_pw: userPw,
    user_number: userNumber,
  };
  const register = () => {
    axios.post(`http://${host.key}/auth/register`, registerData).then((res) => {
      if (res.data.error) {
        console.log('0');
      } else {
        console.log(res.data);
        navigate('/login');
      }
    });
  };
  let check = '';
  if (userPw != userCheckPw) {
    check = '땡';
  } else if (userPw.length < 1) {
    check = '입력없음';
  } else if (userPw == userCheckPw) {
    check = '일치';
  }
  return (
    <>
      <S.RegisterBackground>
        <S.RegisteradAdjustment>
          <Register />
          <RegisterInput
            Register={register}
            setUserName={setUserName}
            setUserId={setUserId}
            setUserPw={setUserPw}
            setUserNumber={setUserNumber}
            Check={check}
            setUserCheckPw={setUserCheckPw}
          />
          <RegisterBottom />
        </S.RegisteradAdjustment>
      </S.RegisterBackground>
    </>
  );
};

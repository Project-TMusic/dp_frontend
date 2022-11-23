import React, { useState } from 'react';
import { Register } from 'src/components';
import { RegisterBottom } from 'src/components/common/Account/Register/Bottom';
import { RegisterInput } from 'src/components/common/Account/Register/Input';
import * as S from './styled';

//backend
import axios from 'axios';
import { host } from 'src/host';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

export const RegisterPage: React.FC = () => {
  const [userCheckPw, setUserCheckPw] = useState('');
  const initialValues = {
    username: '',
    user_id: '',
    user_pw: '',
    user_number: '',
  };
  const register = () => {
    const data = {};
    axios.post(`http://${host.key}/auth/register`, data).then(() => {
      console.log(data);
    });
  };
  let check = '';
  if (initialValues.user_pw != userCheckPw) {
    check = '땡';
  } else if (initialValues.user_pw.length < 1) {
    check = '입력없음';
  } else if (initialValues.user_pw == userCheckPw) {
    check = '일치';
  }
  return (
    <>
      <S.RegisterBackground>
        <S.RegisteradAdjustment>
          <Register />
          <RegisterInput Check={check} setUserCheckPw={setUserCheckPw} />
          <RegisterBottom />
        </S.RegisteradAdjustment>
      </S.RegisterBackground>
    </>
  );
};

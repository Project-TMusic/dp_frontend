import React, { useState } from 'react';
import { Register } from 'src/components';
import { RegisterBottom } from 'src/components/common/Account/Register/Bottom';
import { RegisterInput } from 'src/components/common/Account/Register/Input';
import * as S from './styled';

export const RegisterPage: React.FC = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [userCheckPw, setUserCheckPw] = useState('');
  const [userNumber, setUserNumber] = useState('');
  return (
    <>
      <S.RegisterBackground>
        <S.RegisteradAdjustment>
          <Register />
          <RegisterInput
            setUserId={setUserId}
            setUserPw={setUserPw}
            setUserCheckPw={setUserCheckPw}
            setUserNumber={setUserNumber}
          />
          <RegisterBottom />
        </S.RegisteradAdjustment>
      </S.RegisterBackground>
    </>
  );
};

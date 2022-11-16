import React from 'react';
import * as S from './styled';

export const Login: React.FC = () => {
  return (
    <>
      <S.LoginBackground>
        <S.LoginContainer>
          <S.LoginTitle>로그인</S.LoginTitle>
          <S.LoginText>아이디</S.LoginText>
          <S.LoginInput />
          <S.LoginText>비밀번호</S.LoginText>
          <S.LoginInput />
          <S.RegisterLink to="/register">
            <S.LoginText>회원가입 하러가기</S.LoginText>
          </S.RegisterLink>
          <S.LoginButton>로그인</S.LoginButton>
        </S.LoginContainer>
      </S.LoginBackground>
    </>
  );
};

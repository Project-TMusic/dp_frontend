import React from 'react';
import * as S from './styled';

export const Register: React.FC = () => {
  // const onRegisterClick = (e: React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <S.RegisterBackground>
        <S.RegisterContainer>
          <S.RegisterTitle>회원가입</S.RegisterTitle>
          <S.RegisterText>아이디</S.RegisterText>
          <S.RegisterInput required />
          <S.RegisterText>비밀번호</S.RegisterText>
          <S.RegisterInput type="password" required />
          <S.RegisterText>비밀번호 확인</S.RegisterText>
          <S.RegisterInput type="password" required />
          <S.RegisterText>전화번호</S.RegisterText>
          <S.RegisterInput required />
          <S.RegisterText>이메일 주소</S.RegisterText>
          <S.RegisterInput required />
          <S.LoginLink to="/login">
            <S.RegisterButton>가입</S.RegisterButton>
          </S.LoginLink>
        </S.RegisterContainer>
      </S.RegisterBackground>
    </>
  );
};

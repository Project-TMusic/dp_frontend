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
          <S.RegisterDescription>
            빠르고 안전한 배달 서비스 dp에 가입하세요!
          </S.RegisterDescription>
          <S.RegisterAuthContainer>
            <S.RegisterInput type="text" placeholder="아이디" required />
          </S.RegisterAuthContainer>
          <S.RegisterAuthContainer>
            <S.RegisterInput type="password" placeholder="비밀번호" required />
          </S.RegisterAuthContainer>
          <S.RegisterAuthContainer>
            <S.RegisterInput
              type="password"
              placeholder="비밀번호 확인"
              required
            />
          </S.RegisterAuthContainer>
          <S.RegisterAuthContainer>
            <S.RegisterInput
              type="tel"
              pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
              placeholder="전화번호"
              required
            />
          </S.RegisterAuthContainer>
          <S.LoginLink to="/login">
            <S.RegisterButton>가입</S.RegisterButton>
          </S.LoginLink>
          <S.horizontalContainer>
            <S.horizontalLineLeft />
            <S.horizontalText>or</S.horizontalText>
            <S.horizontalLineRight />
          </S.horizontalContainer>
          <S.OtherOptionContainer>
            <S.OtherOptionText to="/login">
              이미 계정이 있으신가요?
            </S.OtherOptionText>
          </S.OtherOptionContainer>
        </S.RegisterContainer>
      </S.RegisterBackground>
    </>
  );
};

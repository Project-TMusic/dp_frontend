import React from 'react';
import * as S from './styled';

export const Login: React.FC = () => {
  return (
    <>
      <S.LoginBackground>
        <S.LoginMainContainer>
          <S.LoginTitleContainer>
            <S.LoginTitle>로그인</S.LoginTitle>
          </S.LoginTitleContainer>
          <S.LoginDescriptionContainer>
            <S.LoginDescription>
              서비스 사용을 위해 로그인 해주세요!
            </S.LoginDescription>
          </S.LoginDescriptionContainer>
          <S.AuthContainerId>
            <S.AuthId placeholder="아이디" />
          </S.AuthContainerId>
          <S.AuthContainerPw>
            <S.AuthPw placeholder="비밀번호" type="password" />
          </S.AuthContainerPw>
          <S.ButtonContainer>
            <S.AuthButton>로그인</S.AuthButton>
          </S.ButtonContainer>
          <S.horizontalContainer>
            <S.horizontalLineLeft />
            <S.horizontalText>or</S.horizontalText>
            <S.horizontalLineRight />
          </S.horizontalContainer>
          <S.OtherOptionContainer>
            <S.OtherOptionText to="/register">
              계정이 없으신가요?
            </S.OtherOptionText>
          </S.OtherOptionContainer>
        </S.LoginMainContainer>
      </S.LoginBackground>
    </>
  );
};

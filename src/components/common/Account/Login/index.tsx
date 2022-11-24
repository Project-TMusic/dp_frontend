import React from 'react';
import * as S from './styled';

// eslint-disable-next-line @typescript-eslint/no-empty-interface

export const Login: React.FC = () => {
  return (
    <>
      <S.LoginMainContainer>
        <S.LoginTitleContainer>
          <S.LoginTitle>로그인</S.LoginTitle>
        </S.LoginTitleContainer>
        <S.LoginDescriptionContainer>
          <S.LoginDescription>
            서비스 사용을 위해 로그인 해주세요!
          </S.LoginDescription>
        </S.LoginDescriptionContainer>
      </S.LoginMainContainer>
    </>
  );
};

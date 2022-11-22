import React from 'react';
import * as S from './styled';

export const Register: React.FC = () => {
  // const onRegisterClick = (e: React.MouseEvent<HTMLElement>) => {
  //   e.preventDefault();
  // };
  return (
    <>
      <S.RegisterContainer>
        <S.RegisterTitle>회원가입</S.RegisterTitle>
        <S.RegisterDescription>
          빠르고 안전한 배달 서비스 dp에 가입하세요!
        </S.RegisterDescription>
      </S.RegisterContainer>
    </>
  );
};

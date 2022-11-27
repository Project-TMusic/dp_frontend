import React from 'react';
import * as S from './styled';

export const OneLine: React.FC = () => {
  return (
    <S.OneLineContainer>
      <S.LogoImgContainer>
        <S.LogoImg src="https://i.ibb.co/ZNgNfVw/PayLogo.png" />
      </S.LogoImgContainer>
      <S.LogoTextContainer>
        <S.LogoText>결제하기</S.LogoText>
      </S.LogoTextContainer>
    </S.OneLineContainer>
  );
};

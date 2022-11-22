import React from 'react';
import * as S from './styled';

export const Footer: React.FC = () => {
  return (
    <S.FooterContainer>
      <S.FooterLogoContainer>
        <S.FooterLogo></S.FooterLogo>
      </S.FooterLogoContainer>
      <S.coverMargin>
        <S.AboutContainer>
          <S.About>About</S.About>
          <S.FooterAboutUsLink to="/about">회사소개</S.FooterAboutUsLink>
          <S.FooterText>사용방법</S.FooterText>
          <S.FooterText>팀원</S.FooterText>
        </S.AboutContainer>
        <S.CompanyInfoContainer>
          <S.CompanyInfo>Info</S.CompanyInfo>
          <S.FooterText>
            © 2022. Drone Package Co. all rights reserved.
          </S.FooterText>
        </S.CompanyInfoContainer>
      </S.coverMargin>
    </S.FooterContainer>
  );
};

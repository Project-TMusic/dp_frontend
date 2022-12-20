import React from 'react';
import { AboutUs, Navbar } from 'src/components';
import { Global } from '@emotion/react';
import { globalPadding } from 'src/styles/globalPadding';
import { Footer } from 'src/components';

import * as S from './styled';

export const About: React.FC = () => {
  return (
    <>
      <Global styles={globalPadding} />

      <S.AboutContainer>
        <AboutUs />
        <S.Flex>
          <S.Logo />
          <S.Description>
            <S.DescriptionTitle>
              신속하고 안전한 다종류 배달 서비스 dp!
            </S.DescriptionTitle>
            여러 카테고리의 상품들을 신속하고 안전하게 배달시켜보세요! 저희 dp는
            드론을 통해 다양한 상품들을 신속하고 안전하게 배달해주는 드론 배달
            서비스입니다.
          </S.Description>
        </S.Flex>
      </S.AboutContainer>
      <Footer />
    </>
  );
};

import React, { useRef } from 'react';
import { Global } from '@emotion/react';
import { globalPadding } from 'src/styles/globalPadding';
import { AboutUs, Footer } from 'src/components';

import * as S from './styled';
import { AboutCard } from '../../components/common/AboutComponents/AboutCard/index';
import { EmptySpace3rem } from 'src/components/common/MainFiles/ProductComponent/EmptySpace/styled';
import { AboutTitle } from 'src/components/common/AboutComponents/AboutTitle';
import { useScrollFadeIn } from 'src/hooks/useScrollFadeIn';

export const About: React.FC = () => {
  const scrollAnimated = {
    0: useScrollFadeIn('up', 1, 0.2),
    1: useScrollFadeIn('up', 1, 0.7),
  };
  return (
    <>
      <Global styles={globalPadding} />

      <S.AboutContainer>
        <AboutUs />
        <S.Flex {...scrollAnimated[0]}>
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
        <S.DescriptionTop20Rem />
        <S.ScrollAnimation {...scrollAnimated[1]}>
          <S.AboutSectionOne>
            <AboutTitle
              AboutTitleFontCenter="left"
              AboutTitleFontSize="2.7rem"
              AboutTitleFontWeight="800"
              AboutTitleTextProps="dp에서 제공하는 서비스"
            />
            <S.AboutCardContainer>
              <AboutCard
                AboutNumber={1}
                AboutText={'매장의 드론 배달 서비스'}
              />
              <EmptySpace3rem />
              <EmptySpace3rem />
              <AboutCard AboutNumber={2} AboutText={'매일 같은 속도 보장'} />
            </S.AboutCardContainer>
          </S.AboutSectionOne>
        </S.ScrollAnimation>
        <S.DescriptionTop />
      </S.AboutContainer>
      <Footer />
    </>
  );
};

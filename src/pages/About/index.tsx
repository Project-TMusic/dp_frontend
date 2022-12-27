import React, { useRef } from 'react';
import { Global } from '@emotion/react';
import { globalPadding } from 'src/styles/globalPadding';
import { AboutUs, Footer } from 'src/components';

import * as S from './styled';
import { AboutUsService } from '../../components/common/AboutComponents/AboutUsService/index';
import { EmptySpace3rem } from 'src/components/common/MainFiles/ProductComponent/EmptySpace/styled';
import { AboutTitle } from 'src/components/common/AboutComponents/AboutTitle';
import { useScrollFadeIn } from 'src/hooks/useScrollFadeIn';
import { AboutVision } from 'src/components/common/AboutComponents/AboutVision';

export const About: React.FC = () => {
  const scrollAnimated = {
    0: useScrollFadeIn<HTMLHeadingElement>('up', 0.7, 0),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0),
    2: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0),
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
        <S.DescriptionTop10Rem />
        <S.ScrollAnimation {...scrollAnimated[1]}>
          <S.AboutSectionOne>
            <AboutTitle
              AboutTitleFontCenter="left"
              AboutTitleFontSize="2.7rem"
              AboutTitleFontWeight="900"
              AboutTitleTextProps="dp에서 제공하는 서비스"
            />
            <S.AboutCardContainer>
              <AboutUsService AboutNumber={1} AboutText={'매장의 드론 배달'} />
              <EmptySpace3rem />
              <AboutUsService AboutNumber={2} AboutText={'빠른 배달 속도'} />
              <EmptySpace3rem />
              <AboutUsService
                AboutNumber={3}
                AboutText={'실시간 상품위치 제공'}
              />
              <EmptySpace3rem />
              <AboutUsService AboutNumber={4} AboutText={'좋은 상품 품질'} />
            </S.AboutCardContainer>
          </S.AboutSectionOne>
        </S.ScrollAnimation>
        <S.AboutSectionTwo>
          <S.AboutOurVisionTitle {...scrollAnimated[2]}>
            <S.AboutOurPossibility>Possibility</S.AboutOurPossibility>
            <AboutTitle
              AboutTitleFontCenter="center"
              AboutTitleFontSize="3rem"
              AboutTitleFontWeight="900"
              AboutTitleTextProps="dp의 비전"
            />
          </S.AboutOurVisionTitle>
          <S.AboutVisionContainer>
            <AboutVision />
            <AboutVision />
            <AboutVision />
          </S.AboutVisionContainer>
        </S.AboutSectionTwo>
        <S.DescriptionTop />
      </S.AboutContainer>
      <Footer />
    </>
  );
};

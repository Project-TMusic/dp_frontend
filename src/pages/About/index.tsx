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
import { MouseDown } from 'src/components/common/AboutComponents/MouseDown';

export const About: React.FC = () => {
  const scrollAnimated = {
    0: useScrollFadeIn<HTMLHeadingElement>('down', 1, 0),
    1: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0),
    2: useScrollFadeIn<HTMLHeadingElement>('up', 1, 0),
    3: useScrollFadeIn<HTMLHeadingElement>('up', 1.5, 0.5),
    4: useScrollFadeIn<HTMLHeadingElement>('up', 1.5, 1),
    5: useScrollFadeIn<HTMLHeadingElement>('up', 1.5, 1.5),
  };
  return (
    <>
      <S.AboutContainer>
        <S.Flex>
          <AboutUs />
          <S.MouseDownContainer {...scrollAnimated[0]}>
            <MouseDown />
          </S.MouseDownContainer>
        </S.Flex>
        <S.DescriptionTop6Rem />
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
            <S.AnimationAboutVisionContainer {...scrollAnimated[3]}>
              <AboutVision
                VisionText="4차산업기술"
                VisionIcon={
                  'https://cdn-icons-png.flaticon.com/128/4257/4257483.png'
                }
              />
            </S.AnimationAboutVisionContainer>
            <EmptySpace3rem />
            <S.AnimationAboutVisionContainer {...scrollAnimated[4]}>
              <AboutVision
                VisionText="전기자동차 관련 모터 개발"
                VisionIcon={
                  'https://cdn-icons-png.flaticon.com/128/1835/1835948.png'
                }
              />
            </S.AnimationAboutVisionContainer>
            <EmptySpace3rem />
            <S.AnimationAboutVisionContainer {...scrollAnimated[5]}>
              <AboutVision
                VisionText="배달팁"
                VisionIcon={
                  'https://cdn-icons-png.flaticon.com/128/1495/1495118.png'
                }
              />
            </S.AnimationAboutVisionContainer>
          </S.AboutVisionContainer>
        </S.AboutSectionTwo>
        <S.DescriptionTop />
      </S.AboutContainer>
    </>
  );
};

import React from 'react';
import { useScrollFadeIn } from 'src/hooks/useScrollFadeIn';
import * as S from './styled';
import { Footer } from 'src/components';

export const AboutUs: React.FC = () => {
  // const animatedItem = {
  //   0: useScrollFadeIn('up', 1, 0.7),
  // };
  return (
    <>
      <S.AboutUsContainer>
        <S.Title>About Us.</S.Title>
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
      </S.AboutUsContainer>
      <Footer />
    </>
  );
};

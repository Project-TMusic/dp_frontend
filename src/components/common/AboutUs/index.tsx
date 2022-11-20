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
            <S.DescriptionTitle>대충 소개글... </S.DescriptionTitle>
            국가원로자문회의의 조직·직무범위 기타 필요한 사항은 법률로 정한다.
            국회에서 의결된 법률안은 정부에 이송되어 15일 이내에 대통령이
            공포한다. 선거에 관한 경비는 법률이 정하는 경우를 제외하고는 정당
            또는 후보자에게 부담시킬 수 없다. 각급 선거관리위원회의
            조직·직무범위 기타 필요한 사항은 법률로 정한다.
          </S.Description>
        </S.Flex>
      </S.AboutUsContainer>
      <Footer />
    </>
  );
};

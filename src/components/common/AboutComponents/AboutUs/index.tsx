import React from 'react';
import { useScrollFadeIn } from 'src/hooks/useScrollFadeIn';
import * as S from './styled';

export const AboutUs: React.FC = () => {
  // const animatedItem = {
  //   0: useScrollFadeIn('up', 1, 0.7),
  // };
  return (
    <>
      <S.AboutUsContainer>
        <S.Title>drone package</S.Title>
      </S.AboutUsContainer>
    </>
  );
};

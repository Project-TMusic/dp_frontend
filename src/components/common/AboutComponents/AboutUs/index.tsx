import React from 'react';
import { useScrollFadeIn } from 'src/hooks/useScrollFadeIn';
import * as S from './styled';

export interface AboutUsType {
  ViewportBoolean: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Ref: any;
}

export const AboutUs: React.FC<AboutUsType> = ({ ViewportBoolean, Ref }) => {
  // const animatedItem = {
  //   0: useScrollFadeIn('up', 1, 0.7),
  // };
  return (
    <>
      <S.AboutUsContainer>
        <S.Title
          ref={Ref}
          className={ViewportBoolean ? 'animation' : 'animation'}
        >
          drone package
        </S.Title>
      </S.AboutUsContainer>
    </>
  );
};

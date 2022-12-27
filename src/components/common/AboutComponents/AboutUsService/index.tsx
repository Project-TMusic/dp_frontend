import React from 'react';
import * as S from './styled';

export interface AboutCardElementsTypes {
  AboutNumber: number;
  AboutText: string;
}

export const AboutUsService: React.FC<AboutCardElementsTypes> = ({
  AboutNumber,
  AboutText,
}) => {
  return (
    <S.AboutServiceContainer>
      <S.DotPoint>·</S.DotPoint>
      <S.AboutService>{AboutText}</S.AboutService>
    </S.AboutServiceContainer>
  );
};

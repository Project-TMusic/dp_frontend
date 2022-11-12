import React from 'react';

import * as S from './styled';

export interface TitlePropsType {
  TitleProp: string;
}

export const Title: React.FC<TitlePropsType> = ({ TitleProp }) => {
  return (
    <S.CategoryTitleContainer>
      <S.CategoryTitle>{TitleProp}</S.CategoryTitle>
    </S.CategoryTitleContainer>
  );
};

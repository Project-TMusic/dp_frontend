import React from 'react';

import * as S from './styled';

export interface TitlePropsType {
  TitleProp: string;
}

export const Title: React.FC<TitlePropsType> = ({ TitleProp }) => {
  return (
    <S.CategoryTitleSelectContainer>
      <S.CategoryTitle>{TitleProp}</S.CategoryTitle>
    </S.CategoryTitleSelectContainer>
  );
};

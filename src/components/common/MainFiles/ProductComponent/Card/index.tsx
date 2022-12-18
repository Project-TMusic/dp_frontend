import React from 'react';

import * as S from './styled';

export interface CardType {
  cardtitleprops: string;
  priceprops: number;
  imgprops: string;
}

export const Card: React.FC<CardType> = ({
  cardtitleprops,
  priceprops,
  imgprops,
}) => {
  return (
    <S.CardContainer>
      <S.Card>{priceprops}</S.Card>
    </S.CardContainer>
  );
};

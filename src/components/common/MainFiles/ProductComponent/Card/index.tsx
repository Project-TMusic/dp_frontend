import React from 'react';

import * as S from './styled';

export interface CardType {
  cardtitleprops: string;
  priceprops: number;
  imgprops: string;
  toGoDetail: any;
  idNumber: number;
}

export const Card: React.FC<CardType> = ({
  cardtitleprops,
  priceprops,
  imgprops,
  toGoDetail,
  idNumber,
}) => {
  return (
    <S.CardContainer to={`/detail/${toGoDetail}/${idNumber}`}>
      <S.Card>
        <S.CardImg src={imgprops} />
        <S.nameText>{priceprops}</S.nameText>
      </S.Card>
    </S.CardContainer>
  );
};

import React from 'react';
import * as S from './styled';

export interface DetailData {
  ImgSrc: string;
  FoodName: string;
  FoodDescription: string;
  FoodOnClick: any;
}

export const DetailProduct: React.FC<DetailData> = ({
  ImgSrc,
  FoodName,
  FoodDescription,
  FoodOnClick,
}) => {
  return (
    <S.DetailProductContainer>
      <S.FoodImgContainer>
        <S.FoodImg src={ImgSrc} />
      </S.FoodImgContainer>
      <S.FoodTextContainer>
        <S.FoodName>{FoodName}</S.FoodName>
        <S.FoodDescription>{FoodDescription}</S.FoodDescription>
        <S.AddToCartContainer>
          <S.AddToCartButton onClick={FoodOnClick}>담기</S.AddToCartButton>
        </S.AddToCartContainer>
      </S.FoodTextContainer>
    </S.DetailProductContainer>
  );
};

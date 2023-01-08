import React from 'react';
import * as S from './styled';

export interface DetailData {
  ImgSrc: any;
  FoodName: any;
  FoodDescription: any;
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
        <S.FoodImg src={ImgSrc[0]} />
      </S.FoodImgContainer>
      <S.FoodTextContainer>
        <S.FoodName>{FoodName[0]}</S.FoodName>
        <S.FoodDescription>{FoodDescription[0]}</S.FoodDescription>
        <S.AddToCartContainer>
          <S.AddToCartButton
            onClick={() => {
              FoodOnClick;
            }}
          >
            담기
          </S.AddToCartButton>
        </S.AddToCartContainer>
      </S.FoodTextContainer>
    </S.DetailProductContainer>
  );
};

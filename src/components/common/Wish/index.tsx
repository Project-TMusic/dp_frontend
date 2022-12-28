import React, { useRef, useState } from 'react';
import * as S from './styled';
import { All_Product } from 'src/api';

export const Wish: React.FC = () => {
  const [CategoryProduct, setCategoryProduct] = useState('');
  const ChangeCategoryFood = () => {
    setCategoryProduct('food');
  };
  const ChangeCategoryClothes = () => {
    setCategoryProduct('clothes');
  };
  return (
    <S.WishAllContainer>
      <S.positionCenter>
        <S.WishHeaderContainer>
          <S.WishHeader>
            <S.WishHeaderText>관심목록</S.WishHeaderText>
            <S.WishHeaderUnderLine />
          </S.WishHeader>
        </S.WishHeaderContainer>
        <>
          <S.DropdownUnorderdList>
            <S.DropdownListItem onClick={ChangeCategoryFood}>
              Food
            </S.DropdownListItem>
            <S.DropdownListItem onClick={ChangeCategoryClothes}>
              Clothes
            </S.DropdownListItem>
            <S.DropdownListItem>Health</S.DropdownListItem>
            <S.DropdownListItem>Tool</S.DropdownListItem>
          </S.DropdownUnorderdList>
        </>
        <S.WishCenterDisplay>
          <S.WishListContainer>
            {All_Product.filter((value) => {
              if (CategoryProduct === value.tag) {
                return value;
              }
            }).map((value: any, key: any) => {
              return (
                <S.WishListContent key={key}>
                  <S.WishListImage />
                  <S.WishListDescription>
                    <S.WishListTitle>{value.name}</S.WishListTitle>
                    <S.WishListHeart>❤️</S.WishListHeart>
                  </S.WishListDescription>
                  <S.WishListStore></S.WishListStore>
                </S.WishListContent>
              );
            })}
          </S.WishListContainer>
        </S.WishCenterDisplay>
      </S.positionCenter>
    </S.WishAllContainer>
  );
};

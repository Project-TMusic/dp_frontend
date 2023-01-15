import React, { useRef, useState } from 'react';
import * as S from './styled';
import { All_Product } from 'src/api';

export const Wish: React.FC = () => {
  const [CategoryProduct, setCategoryProduct] = useState('food');
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
                <S.WishListContent
                  key={key}
                  to={`/detail/${value.name}/${value.id}`}
                >
                  <S.WishListImage src={value.img} />
                  <S.WishListDescription>
                    <S.WishListTitle>
                      {value.name}
                      <S.WishListHeart>❤️</S.WishListHeart>
                    </S.WishListTitle>
                  </S.WishListDescription>
                </S.WishListContent>
              );
            })}
          </S.WishListContainer>
        </S.WishCenterDisplay>
      </S.positionCenter>
    </S.WishAllContainer>
  );
};

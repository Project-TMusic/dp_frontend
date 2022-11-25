import React from 'react';
import * as S from './styled';

export const ShoppingCart: React.FC = () => {
  return (
    <>
      <S.CartContainer>
        <S.CartHeader>
          <S.CartHeaderText>장바구니</S.CartHeaderText>
          <S.CartHeaderUnderline />
        </S.CartHeader>
        <S.CartBody>
          <S.StoreContainer>
            <S.StoreImage />
            <S.StoreName>준희네 떡볶이</S.StoreName>
          </S.StoreContainer>
        </S.CartBody>
      </S.CartContainer>
    </>
  );
};

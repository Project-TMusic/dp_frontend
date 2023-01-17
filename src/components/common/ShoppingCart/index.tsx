import React from 'react';
import * as S from './styled';

export const ShoppingCart: React.FC = () => {
  return (
    <S.CartContainer>
      <S.CartHeader>
        <S.CartHeaderText>장바구니</S.CartHeaderText>
      </S.CartHeader>
      <S.CartHeaderUnderline />
      <S.PaymentContainer>
        <S.PaymentUpside>
          <S.PaymentUpsideTitle>주문 현황</S.PaymentUpsideTitle>
          <S.PaymentTextGroup>
            <S.PaymentText>총 상품 금액</S.PaymentText>
            <S.PaymentPrice>100,000원</S.PaymentPrice>
          </S.PaymentTextGroup>
          <S.PaymentTextGroup>
            <S.PaymentText>할인 금액</S.PaymentText>
            <S.PaymentPrice>10,000원</S.PaymentPrice>
          </S.PaymentTextGroup>
        </S.PaymentUpside>
        <S.PaymentMiddleSide>
          <S.PaymentTextGroup>
            <S.PaymentText>총 결제 금액</S.PaymentText>
            <S.PaymentPrice>90,000원</S.PaymentPrice>
          </S.PaymentTextGroup>
        </S.PaymentMiddleSide>
        <S.PaymentDownside>
          <S.PaymentButton href="/payment">구매하기</S.PaymentButton>
        </S.PaymentDownside>
      </S.PaymentContainer>
      <S.CartBody>
        <S.StoreHeader>
          <S.Store>가게</S.Store>
          <S.Product>제품</S.Product>
          <S.Quantity>수량</S.Quantity>
          <S.Price>가격</S.Price>
        </S.StoreHeader>
        <S.CartContent>
          <S.StoreVertical>
            <S.StoreProduct>
              <S.StoreName>가게 이름</S.StoreName>
              <S.StoreImg />
            </S.StoreProduct>
          </S.StoreVertical>
          <S.StoreWarp>
            <S.StoreGroup>
              <S.ProductContent>
                <S.ProductImg />
                <S.ProductName>제품 이름</S.ProductName>
              </S.ProductContent>
              <S.QuantityContent>
                <S.QuantityMinusButton>-</S.QuantityMinusButton>
                <S.QuantityNumber>0</S.QuantityNumber>
                <S.QuantityPlusButton>+</S.QuantityPlusButton>
              </S.QuantityContent>
              <S.PriceContent>
                <S.PriceText>10,000원</S.PriceText>
              </S.PriceContent>
              <S.DeleteButton>X</S.DeleteButton>
            </S.StoreGroup>
            <S.StoreGroup>
              <S.ProductContent>
                <S.ProductImg />
                <S.ProductName>제품 이름</S.ProductName>
              </S.ProductContent>
              <S.QuantityContent>
                <S.QuantityMinusButton>-</S.QuantityMinusButton>
                <S.QuantityNumber>0</S.QuantityNumber>
                <S.QuantityPlusButton>+</S.QuantityPlusButton>
              </S.QuantityContent>
              <S.PriceContent>
                <S.PriceText>10,000원</S.PriceText>
              </S.PriceContent>
              <S.DeleteButton>X</S.DeleteButton>
            </S.StoreGroup>
            <S.StoreGroup>
              <S.ProductContent>
                <S.ProductImg />
                <S.ProductName>제품 이름</S.ProductName>
              </S.ProductContent>
              <S.QuantityContent>
                <S.QuantityMinusButton>-</S.QuantityMinusButton>
                <S.QuantityNumber>0</S.QuantityNumber>
                <S.QuantityPlusButton>+</S.QuantityPlusButton>
              </S.QuantityContent>
              <S.PriceContent>
                <S.PriceText>10,000원</S.PriceText>
              </S.PriceContent>
              <S.DeleteButton>X</S.DeleteButton>
            </S.StoreGroup>
            <S.StoreGroup>
              <S.ProductContent>
                <S.ProductImg />
                <S.ProductName>제품 이름</S.ProductName>
              </S.ProductContent>
              <S.QuantityContent>
                <S.QuantityMinusButton>-</S.QuantityMinusButton>
                <S.QuantityNumber>0</S.QuantityNumber>
                <S.QuantityPlusButton>+</S.QuantityPlusButton>
              </S.QuantityContent>
              <S.PriceContent>
                <S.PriceText>10,000원</S.PriceText>
              </S.PriceContent>
              <S.DeleteButton>X</S.DeleteButton>
            </S.StoreGroup>
          </S.StoreWarp>
        </S.CartContent>
        <S.CartContent>
          <S.StoreVertical>
            <S.StoreProduct>
              <S.StoreName>가게 이름</S.StoreName>
              <S.StoreImg />
            </S.StoreProduct>
          </S.StoreVertical>
          <S.StoreWarp>
            <S.StoreGroup>
              <S.ProductContent>
                <S.ProductImg />
                <S.ProductName>제품 이름</S.ProductName>
              </S.ProductContent>
              <S.QuantityContent>
                <S.QuantityMinusButton>-</S.QuantityMinusButton>
                <S.QuantityNumber>0</S.QuantityNumber>
                <S.QuantityPlusButton>+</S.QuantityPlusButton>
              </S.QuantityContent>
              <S.PriceContent>
                <S.PriceText>10,000원</S.PriceText>
              </S.PriceContent>
              <S.DeleteButton>X</S.DeleteButton>
            </S.StoreGroup>
            <S.StoreGroup>
              <S.ProductContent>
                <S.ProductImg />
                <S.ProductName>제품 이름</S.ProductName>
              </S.ProductContent>
              <S.QuantityContent>
                <S.QuantityMinusButton>-</S.QuantityMinusButton>
                <S.QuantityNumber>0</S.QuantityNumber>
                <S.QuantityPlusButton>+</S.QuantityPlusButton>
              </S.QuantityContent>
              <S.PriceContent>
                <S.PriceText>10,000원</S.PriceText>
              </S.PriceContent>
              <S.DeleteButton>X</S.DeleteButton>
            </S.StoreGroup>
          </S.StoreWarp>
        </S.CartContent>
      </S.CartBody>
    </S.CartContainer>
  );
};

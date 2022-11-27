import React from 'react';
import { Link } from 'react-router-dom';
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
          <S.StoreHeader>
            <S.StoreImage />
            <S.StoreName>준희네 떡볶이 남가좌동점</S.StoreName>
          </S.StoreHeader>
          <S.StoreProduct>
            <S.ProductContainer>
              <S.ProductName>준희표 로제마라짜장카레 떡볶이</S.ProductName>
              <S.ProductFlex>
                <S.ProductImage />
                <S.ProductColumn>
                  <S.ProductDetail>· 토핑 선택 : 라면사리 추가</S.ProductDetail>
                  <S.ProductDetail>
                    · 죽고싶을 때 추천! : 준희표 용암소스 추가
                  </S.ProductDetail>
                  <S.ProductPrice>19,800원</S.ProductPrice>
                </S.ProductColumn>
              </S.ProductFlex>
            </S.ProductContainer>
            <S.ProductContainer>
              <S.ProductName>
                준희표 9300℃ 기름에서 튀긴 오징어튀김
              </S.ProductName>
              <S.ProductFlex>
                <S.ProductImage />
                <S.ProductColumn>
                  <S.ProductDetail>· 10800℃에서 튀기기</S.ProductDetail>
                  <S.ProductDetail>
                    · 준희표 지옥에서 온 소스 추가
                  </S.ProductDetail>
                  <S.ProductDetail>
                    · 토핑 선택 : 낙지 탕탕이 같은 낙지 튀김 추가 / 오징어 머리
                    튀김 추가
                  </S.ProductDetail>
                  <S.ProductPrice>132,900원</S.ProductPrice>
                </S.ProductColumn>
              </S.ProductFlex>
            </S.ProductContainer>
          </S.StoreProduct>
          <S.StoreHeader>
            <S.StoreImage />
            <S.StoreName>준희네 옷가게 남서울대학교점</S.StoreName>
          </S.StoreHeader>
          <S.StoreProduct>
            <S.ProductContainer>
              <S.ProductName>빨롄씨야꺄 후드티</S.ProductName>
              <S.ProductFlex>
                <S.ProductImage />
                <S.ProductColumn>
                  <S.ProductPrice>955,000원</S.ProductPrice>
                </S.ProductColumn>
              </S.ProductFlex>
            </S.ProductContainer>
          </S.StoreProduct>
          <S.StoreHeader>
            <S.StoreImage />
            <S.StoreName>준희네 컴퓨터 용품 영등포점</S.StoreName>
          </S.StoreHeader>
          <S.StoreProduct>
            <S.ProductContainer>
              <S.ProductName>모니터 지지대</S.ProductName>
              <S.ProductFlex>
                <S.ProductImage />
                <S.ProductColumn>
                  <S.ProductPrice>37,500원</S.ProductPrice>
                </S.ProductColumn>
              </S.ProductFlex>
            </S.ProductContainer>
          </S.StoreProduct>
        </S.CartBody>
        <Link to="/payment">결제하러 가기</Link>
      </S.CartContainer>
    </>
  );
};

import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useNavigate, useParams } from 'react-router';
import { All_Product } from 'src/api';

export const SearchResult: React.FC = () => {
  const queryParams = new URLSearchParams(location.search);
  const searchResult = queryParams.getAll('q');
  const StringResult = String(searchResult);
  const navigate = useNavigate();
  const A = All_Product.map((val: any) => {
    return val.menuName;
  });
  console.log(A);
  return (
    <S.SearchResultContainer>
      <S.SearchHeader>
        <S.SearchHeaderColumn>
          <S.SearchHeaderPadding>
            <S.SearchWhat>{searchResult}</S.SearchWhat>에 대한 검색결과
          </S.SearchHeaderPadding>
          {/* 검색된 가게 수에 따라 괄호 안 숫자가 달라지게 */}
          <S.SearchCount>가게 (30)</S.SearchCount>
        </S.SearchHeaderColumn>
        <S.SearchSort>
          {/* 선택한 정렬 방법은 #8aaae5 색깔로 표기되게 */}
          <S.SearchSortText>기본 정렬</S.SearchSortText>
          <S.SearchSortText>별점순</S.SearchSortText>
          <S.SearchSortText>리뷰 많은 순</S.SearchSortText>
          <S.SearchSortText>최소 금액 순</S.SearchSortText>
          <S.SearchSortText>거리순</S.SearchSortText>
          <S.SearchSortText>배달 시간 순</S.SearchSortText>
        </S.SearchSort>
      </S.SearchHeader>
      <S.SearchContentContainer>
        {All_Product.filter((val) => {
          if (StringResult === '') {
            return 0;
          } else if (
            val.name.toLowerCase().includes(StringResult.toLowerCase())
          ) {
            return val;
          }
        }).map((value, key) => {
          return (
            <S.SearchContent key={key} to={`/detail/${value.name}/${value.id}`}>
              <S.StoreImage src={value.img} />
              <S.StoreInfo>
                <S.StoreTitle>{value.name}</S.StoreTitle>
                <S.Infoflex>
                  <S.StoreStar>★ {value.reviewStar}</S.StoreStar>
                  <S.StoreDesc>리뷰 {value.reviewCount}</S.StoreDesc>
                </S.Infoflex>
                <S.Infoflex>
                  <S.StoreDescSt>최소주문 {value.minOrder}원</S.StoreDescSt>
                  <S.StoreDesc>배달팁 {value.orderTip}원</S.StoreDesc>
                </S.Infoflex>
                <S.DeliveryTime>5~10분</S.DeliveryTime>
              </S.StoreInfo>
            </S.SearchContent>
          );
        })}
      </S.SearchContentContainer>
    </S.SearchResultContainer>
  );
};

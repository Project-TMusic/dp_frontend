import React from 'react';
import * as S from './styled';

export const Profile: React.FC = () => {
  return (
    <>
      <S.ProfileHeader />
      <S.ProfilePicture />
      <S.ProfileName />
      <S.InfoRevise>정보 수정</S.InfoRevise>
      <S.ProfileBody>
        <S.OrderHistory>주문 내역</S.OrderHistory>
        <S.BookMark>찜 목록</S.BookMark>
        <S.ReviewHistory>리뷰 내역</S.ReviewHistory>
        <S.Coupon>쿠폰함</S.Coupon>
      </S.ProfileBody>
    </>
  );
};

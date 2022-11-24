import React from 'react';
import * as S from './styled';

export interface ProfileNameInfo {
  name: string;
  logout: any;
}

export const Profile: React.FC<ProfileNameInfo> = ({ name, logout }) => {
  return (
    <>
      <S.ProfileHeader />
      <S.ProfilePicture />
      <S.ProfileName>{name}</S.ProfileName>
      <S.InfoRevise>정보 수정</S.InfoRevise>
      <S.ProfileBody>
        <S.OrderHistory>주문 내역</S.OrderHistory>

        <S.BookMark>
          <button onClick={logout}>로그아웃</button>찜 목록
        </S.BookMark>
        <S.ReviewHistory>리뷰 내역</S.ReviewHistory>
        <S.Coupon>쿠폰함</S.Coupon>
      </S.ProfileBody>
    </>
  );
};

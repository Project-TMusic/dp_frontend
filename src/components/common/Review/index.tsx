import React from 'react';
import * as S from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export const Review: React.FC = () => {
  const settings = {
    arrows: false,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  /**
   * 유저 구매횟수는 결제버튼을 눌렀을 때 db에 count를 하나 늘리고
   * 제일 구매횟수가 많은 유저를 실시간으로 바꿔 불러오고
   * 리뷰본문은 마지막 리뷰를 불러옴 조건문 별점 4점이상
   */
  return (
    <S.ReviewContainer>
      <S.ReviewTitleContainer>
        <S.ReviewTitle>최근 이용자 리뷰</S.ReviewTitle>
      </S.ReviewTitleContainer>
      <S.CarouselStyled {...settings}>
        <S.ReviewCardContainer>
          <S.ProfileIntoBuyContainer>
            <S.ProfilePhotoContainer>
              <S.ProfileImg />
            </S.ProfilePhotoContainer>
            <S.ProfileInfoContainer>
              <S.InfoContainer>
                <S.Info>박준희</S.Info>
              </S.InfoContainer>
              <S.BuyConutContainer>
                <S.BuyCount>5번 재구매</S.BuyCount>
              </S.BuyConutContainer>
            </S.ProfileInfoContainer>
          </S.ProfileIntoBuyContainer>
          <S.StarContainer>
            <S.Star>⭐⭐⭐⭐⭐</S.Star>
          </S.StarContainer>
          <S.ReviewTextContainer>
            <S.ReviewText>
              정말 제품들이 신선하기도 하고 배송도 드론으로 하니까 빠르고 좋네요
            </S.ReviewText>
          </S.ReviewTextContainer>
        </S.ReviewCardContainer>
        <S.ReviewCardContainer>
          <S.ProfileIntoBuyContainer>
            <S.ProfilePhotoContainer>
              <S.ProfileImg />
            </S.ProfilePhotoContainer>
            <S.ProfileInfoContainer>
              <S.InfoContainer>
                <S.Info>뽀로로</S.Info>
              </S.InfoContainer>
              <S.BuyConutContainer>
                <S.BuyCount>20번 재구매</S.BuyCount>
              </S.BuyConutContainer>
            </S.ProfileInfoContainer>
          </S.ProfileIntoBuyContainer>
          <S.StarContainer>
            <S.Star>⭐⭐⭐⭐⭐</S.Star>
          </S.StarContainer>
          <S.ReviewTextContainer>
            <S.ReviewText>
              물고기가 신선하네용 얼음포장 된 것도 드론으로 온다니 신기해요
            </S.ReviewText>
          </S.ReviewTextContainer>
        </S.ReviewCardContainer>
        <S.ReviewCardContainer>
          <S.ProfileIntoBuyContainer>
            <S.ProfilePhotoContainer>
              <S.ProfileImg />
            </S.ProfilePhotoContainer>
            <S.ProfileInfoContainer>
              <S.InfoContainer>
                <S.Info>짭준희1</S.Info>
              </S.InfoContainer>
              <S.BuyConutContainer>
                <S.BuyCount>12번 재구매</S.BuyCount>
              </S.BuyConutContainer>
            </S.ProfileInfoContainer>
          </S.ProfileIntoBuyContainer>
          <S.StarContainer>
            <S.Star>⭐⭐⭐⭐⭐</S.Star>
          </S.StarContainer>
          <S.ReviewTextContainer>
            <S.ReviewText>내가 진짜 박준희임</S.ReviewText>
          </S.ReviewTextContainer>
        </S.ReviewCardContainer>
        <S.ReviewCardContainer>
          <S.ProfileIntoBuyContainer>
            <S.ProfilePhotoContainer>
              <S.ProfileImg />
            </S.ProfilePhotoContainer>
            <S.ProfileInfoContainer>
              <S.InfoContainer>
                <S.Info>짭준희2</S.Info>
              </S.InfoContainer>
              <S.BuyConutContainer>
                <S.BuyCount>12번 재구매</S.BuyCount>
              </S.BuyConutContainer>
            </S.ProfileInfoContainer>
          </S.ProfileIntoBuyContainer>
          <S.StarContainer>
            <S.Star>⭐⭐⭐⭐⭐</S.Star>
          </S.StarContainer>
          <S.ReviewTextContainer>
            <S.ReviewText>내가 진짜 박준희임</S.ReviewText>
          </S.ReviewTextContainer>
        </S.ReviewCardContainer>
        <S.ReviewCardContainer>
          <S.ProfileIntoBuyContainer>
            <S.ProfilePhotoContainer>
              <S.ProfileImg />
            </S.ProfilePhotoContainer>
            <S.ProfileInfoContainer>
              <S.InfoContainer>
                <S.Info>짭준희3</S.Info>
              </S.InfoContainer>
              <S.BuyConutContainer>
                <S.BuyCount>12번 재구매</S.BuyCount>
              </S.BuyConutContainer>
            </S.ProfileInfoContainer>
          </S.ProfileIntoBuyContainer>
          <S.StarContainer>
            <S.Star>⭐⭐⭐⭐⭐</S.Star>
          </S.StarContainer>
          <S.ReviewTextContainer>
            <S.ReviewText>내가 진짜 박준희임</S.ReviewText>
          </S.ReviewTextContainer>
        </S.ReviewCardContainer>
      </S.CarouselStyled>
    </S.ReviewContainer>
  );
};

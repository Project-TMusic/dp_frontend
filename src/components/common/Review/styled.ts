import styled from '@emotion/styled';
import Slider from 'react-slick';

export const ReviewContainer = styled.div`
  background: rgba(0, 0, 0, 0.02);
  width: 100%;
  margin-top: 10rem;
`;

export const ReviewTitleContainer = styled.div`
  width: 100%;
`;

export const ReviewTitle = styled.div`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
  padding-top: 8rem;
  letter-spacing: 0.1rem;
`;

export const ReviewCardContainer = styled.div`
  background: #fff;
  border-radius: 1.5rem;
  height: 20rem;
`;

export const ReviewCard = styled.div``;

export const InfoContainer = styled.div``;

export const Info = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
`;

export const StarContainer = styled.div`
  margin: 2rem 0 0 2rem;
`;

export const Star = styled.div`
  font-size: 2rem;
`;

export const ReviewTextContainer = styled.div`
  width: 80%;
  margin: 2rem 0 0 2rem;
`;

export const ReviewText = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
`;

export const CarouselStyled = styled(Slider)`
  margin-bottom: 13rem;
  margin-top: 4rem;
  .slick-list {
    width: 100%;
    display: block;
    overflow: hidden;
  }
  .slick-slide {
    width: 37rem;
    margin-right: 10rem;

    margin-left: -5rem;
  }
  .slick-dots {
    margin-bottom: -2rem;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #4c51ff;
  }
`;

export const ProfilePhotoContainer = styled.div`
  margin: 2rem 0 0 2rem;
`;

export const ProfileImg = styled.div`
  width: 4rem;
  padding-top: 4rem;
  border-radius: 4rem;
  background: black;
`;

export const BuyConutContainer = styled.div`
  margin-top: 0.5rem;
`;

export const BuyCount = styled.div`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const ProfileInfoContainer = styled.div`
  margin: 2.5rem 0 0 2rem;
`;

export const ProfileIntoBuyContainer = styled.div`
  display: flex;
`;

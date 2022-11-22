import styled from '@emotion/styled';
import Slider from 'react-slick';

export const ReviewContainer = styled.div`
  background: rgba(0, 0, 0, 0.02);
  width: 100%;
  height: 40rem;
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
  width: 34rem;
  height: 13rem;
  border: 1px solid #f3f3f3;
  border-radius: 5px;
  border-radius: 1.5rem;
  &:hover {
    box-shadow: 0 0 0.5rem 0 rgba(0, 0, 0, 0.2);
  }
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
export const ReviewCard = styled.div``;

export const InfoContainer = styled.div``;

export const Info = styled.div`
  font-weight: bold;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  display: flex;
`;

export const StarContainer = styled.div`
  margin-left: 8rem;
  display: flex;
`;

export const Star = styled.img`
  width: 2.3rem;
  height: 2.3rem;
  margin-left: -0.5rem;
`;

export const ReviewTextContainer = styled.div`
  width: 80%;
  margin: 1rem 0 0 4rem;
`;

export const ReviewText = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  line-height: 1.7rem;
`;

export const BuyConutContainer = styled.div`
  margin-top: 0.7rem;
  margin-left: 0.3rem;
`;

export const BuyCount = styled.div`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.5);
`;

export const ProfileInfoContainer = styled.div`
  display: flex;
  margin: 2.9rem 0 0 4rem;
`;

export const ProfileIntoBuyContainer = styled.div`
  display: flex;
`;

import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import Slider from 'react-slick';

export const CategoryImg = styled.div<{ ImgUrl: string }>`
  width: 6.4rem;
  height: 6rem;
  background: url(${(props) => props.ImgUrl});
  object-fit: cover;
  border-radius: 2rem;
  margin: 3rem 0 0 3rem;
`;

export const CategoryComponent = styled.div`
  width: 100%;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  padding-top: 12rem;
  background-color: #f7f7f7;
`;

export const CategoryTitleContainer = styled.div`
  width: 20%;
  margin-left: 14%;
  margin-bottom: 2%;
`;

export const CategoryTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  padding-top: 1.2rem;
`;

export const ArrowContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-right: 17.5rem;
`;

export const ArrowLeftContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2rem;
  margin-right: 3rem;
`;

export const Arrow = styled.div<{ directionProps: boolean }>`
  height: 1rem;
  width: 1rem;
  border: 2px solid black;
  border-width: 2.5px 2.5px 0 0;
  margin: ${(props) =>
    props.directionProps ? '1.2rem 0 0 1.4rem' : '1.2rem 0 0 1.2rem'};
  transform: ${(props) =>
    props.directionProps ? 'rotate(225deg)' : 'rotate(47deg)'};
`;

export const PopularContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ArrowRightContainer = styled.div`
  background-color: #8aaae5;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2rem;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 5rem;
  flex-direction: column;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const CategoryListContainer = styled.div`
  margin: auto;
`;

export const FlexPosition = styled.div`
  display: flex;
`;

export const CategorySection = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 2rem;
  background-color: rgba(0, 0, 0, 0.05);
`;

export const CarouselStyled = styled(Slider)`
  margin-bottom: 17rem;
  .slick-list {
    width: 58vw;
    position: relative;
    display: block;
    overflow: hidden;
  }
  .slick-slide {
    width: 12rem;
    height: 12rem;
    margin-right: 20px;
  }
  .slick-dots {
    margin-bottom: 9rem;
  }
  .slick-prev {
    position: absolute;
    top: 25%;
    left: -50px;
    display: block;
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: black;
    border-radius: 50%;
    outline: none;
    background: transparent;
  }
  .slick-next {
    position: absolute;
    top: 25%;
    right: -50px;
    display: block;
    width: 25px;
    height: 25px;
    cursor: pointer;
    color: black;
    border-radius: 50%;
    outline: none;
    background: transparent;
  }
  .slick-prev:before {
    padding: 0 0.25rem 0 0.25rem;
    font-size: 20px;
    font-family: 'Pretendard';
    border-radius: 1.5rem;
    color: black;
    margin-right: 10rem;
  }
  .slick-next:before {
    padding: 0 0.25rem 0 0.25rem;
    font-size: 20px;
    font-family: 'Pretendard';
    border-radius: 1.5rem;
    color: black;
  }
  .slick-arrow {
    background-color: rgba(0, 0, 0, 0.1);
    margin: 2.5rem -1.5vw 0 -1.5vw;
    :hover {
      background-color: rgba(138, 170, 229, 0.5);
    }
  }
  .slick-arrow:hover {
  }
`;

export const SelectCategory = styled(NavLink)``;

export const CategoryTypeContainer = styled.div`
  width: 65%;
  margin: auto;
`;

export const CategoryTypeCenter = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
`;

export const CategoryTypeFlex = styled.div`
  display: flex;
`;

export const CategoryTitleDescription = styled.div`
  font-weight: 500;
  color: black;
  margin-left: 17.5%;
`;

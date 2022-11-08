import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styled';
import { NavLink } from 'react-router-dom';

export interface CategoryTemplateProps {
  food: React.ReactNode;
  clothes: React.ReactNode;
  health: React.ReactNode;
  computer: React.ReactNode;
  tool: React.ReactNode;
}

export const Category: React.FC<CategoryTemplateProps> = ({
  food,
  clothes,
  health,
  computer,
  tool,
}) => {
  const right = true;
  const left = false;

  const settings = {
    loop: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  const [CategoryFood, setCategory] = useState('');
  const CategoryOnClickFood = () => {
    setCategory('food');
  };
  const CategoryOnClickClothes = () => {
    setCategory('clothes');
  };
  const CategoryOnClickHealth = () => {
    setCategory('health');
  };
  const CategoryOnClickTool = () => {
    setCategory('tool');
  };
  return (
    <>
      <S.CategoryContainer>
        <S.TopContainer>
          <S.CategoryTitleContainer>
            <S.CategoryTitle>카테고리</S.CategoryTitle>
          </S.CategoryTitleContainer>
          <S.ArrowContainer>
            <S.positionRight>
              <S.ArrowLeftContainer>
                <S.Arrow directionProps={right}></S.Arrow>
              </S.ArrowLeftContainer>
              <S.ArrowRightContainer>
                <S.Arrow directionProps={left}></S.Arrow>
              </S.ArrowRightContainer>
            </S.positionRight>
          </S.ArrowContainer>
        </S.TopContainer>
        <S.BottomContainer>
          <S.CategoryListContainer>
            <S.FlexPosition>
              <S.CarouselStyled {...settings}>
                <S.CategorySection onClick={CategoryOnClickFood}>
                  food
                </S.CategorySection>
                <S.CategorySection onClick={CategoryOnClickClothes}>
                  Clothes
                </S.CategorySection>
                <S.CategorySection onClick={CategoryOnClickHealth}>
                  Health
                </S.CategorySection>
                <S.CategorySection onClick={CategoryOnClickTool}>
                  Tool
                </S.CategorySection>
              </S.CarouselStyled>
            </S.FlexPosition>
          </S.CategoryListContainer>
        </S.BottomContainer>
      </S.CategoryContainer>
      {CategoryFood === 'food' ? food : <></>}
      {CategoryFood === 'clothes' ? clothes : <></>}
    </>
  );
};

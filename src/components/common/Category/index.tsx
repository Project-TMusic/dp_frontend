import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styled';
import { NavLink } from 'react-router-dom';
import { FoodContainer } from '../Products/List/Food/styled';

export interface CategoryTemplateProps {
  CategoryType: 'food' | 'clothes' | 'health' | 'tool' | '';
  food: React.ReactNode;
  clothes: React.ReactNode;
  health: React.ReactNode;
  tool: React.ReactNode;
}

export const Category: React.FC<CategoryTemplateProps> = ({
  CategoryType,
  food,
  clothes,
  health,
  tool,
}) => {
  const right = true;
  const left = false;

  const settings = {
<<<<<<< HEAD
    infinite: false,
=======
    dots: false,
    infinite: true,
>>>>>>> 7c6ea61d4b20b8aa339268b739d719b4ead7afab
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    pauseOnHover: true,
    variableWidth: true,
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
                <S.CategorySection>
                  <S.SelectCategory style={{ width: 'none' }} to="/food">
                    <FoodContainer />
                  </S.SelectCategory>
                </S.CategorySection>
                <S.CategorySection>
                  <S.SelectCategory to="/clothes">Clothes</S.SelectCategory>
                </S.CategorySection>
                <S.CategorySection>Health</S.CategorySection>
                <S.CategorySection>Tool</S.CategorySection>
                <S.CategorySection>Tool1</S.CategorySection>
                <S.CategorySection>Tool2</S.CategorySection>
                <S.CategorySection>Tool2</S.CategorySection>
              </S.CarouselStyled>
            </S.FlexPosition>
          </S.CategoryListContainer>
        </S.BottomContainer>
      </S.CategoryContainer>
      {CategoryType === '' ? food : <></>}
      {CategoryType === 'food' ? food : <></>}
      {CategoryType === 'clothes' ? clothes : <></>}
    </>
  );
};

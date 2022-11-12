import React, { useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styled';
import { NavLink } from 'react-router-dom';
import { Title } from 'src/components';
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
    infinite: false,
    dots: false,
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
      <S.FlexPosition>
        <Title TitleProp="추천 상품" />
        <S.positionRight style={{ width: '100%' }}>
          <S.SeeAllContainer>
            <S.SeeAllButton>
              <S.SeeAllText>모두보기</S.SeeAllText>
            </S.SeeAllButton>
          </S.SeeAllContainer>
        </S.positionRight>
      </S.FlexPosition>
      <S.CategoryTypeCenter>
        <S.CategoryTypeContainer>
          <S.CategoryTypeFlex>
            {CategoryType === '' ? food : <></>}
            {CategoryType === 'food' ? food : <></>}
            {CategoryType === 'clothes' ? clothes : <></>}
          </S.CategoryTypeFlex>
        </S.CategoryTypeContainer>
      </S.CategoryTypeCenter>
    </>
  );
};

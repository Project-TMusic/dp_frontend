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
          <S.BottomContainer>
            <S.CategoryListContainer>
              <S.FlexPosition>
                <S.CarouselStyled {...settings}>
                  <S.CategorySection>
                    <S.SelectCategory style={{ width: 'none' }} to="/food">
                      <S.CategoryImg
                        ImgUrl={
                          'https://cdn4.iconfinder.com/data/icons/restaurant-135/32/Restaurant_restaurant_food_dish_hand_serve-64.png'
                        }
                      />
                    </S.SelectCategory>
                  </S.CategorySection>
                  <S.CategorySection>
                    <S.SelectCategory to="/clothes">
                      <S.CategoryImg
                        ImgUrl={
                          'https://cdn3.iconfinder.com/data/icons/font-awesome-solid/640/shirt-64.png'
                        }
                      />
                    </S.SelectCategory>
                  </S.CategorySection>
                  <S.CategorySection>
                    <S.SelectCategory to="/health">
                      <S.CategoryImg
                        ImgUrl={
                          'https://cdn2.iconfinder.com/data/icons/css-vol-2/24/gym-64.png'
                        }
                      />
                    </S.SelectCategory>
                  </S.CategorySection>
                  <S.CategorySection>Tool</S.CategorySection>
                  <S.CategorySection>Tool1</S.CategorySection>
                  <S.CategorySection>Tool2</S.CategorySection>
                  <S.CategorySection>Tool2</S.CategorySection>
                </S.CarouselStyled>
              </S.FlexPosition>
            </S.CategoryListContainer>
          </S.BottomContainer>
        </S.TopContainer>
        <S.PopularContainer>
          <S.FlexPosition>
            <Title TitleProp="인기 상품" />
          </S.FlexPosition>
          <S.CategoryTitleDescription>
            현재 많이 주문하고 있어요.
          </S.CategoryTitleDescription>
          <S.CategoryTypeCenter>
            <S.CategoryTypeContainer>
              <S.CategoryTypeFlex>
                {CategoryType === '' ? food : <></>}
                {CategoryType === 'food' ? food : <></>}
                {CategoryType === 'clothes' ? clothes : <></>}
              </S.CategoryTypeFlex>
            </S.CategoryTypeContainer>
          </S.CategoryTypeCenter>
        </S.PopularContainer>
      </S.CategoryContainer>
    </>
  );
};

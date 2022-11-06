import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './styled';

export interface CategoryTemplateProps {
  CategoryTemplateType: 'food' | 'clothes' | 'health' | 'computer' | 'tool';
  food: React.ReactNode;
  clothes: React.ReactNode;
  health: React.ReactNode;
  computer: React.ReactNode;
  tool: React.ReactNode;
}

export const Category: React.FC<CategoryTemplateProps> = ({
  CategoryTemplateType,
  food,
  clothes,
  health,
  computer,
  tool,
}) => {
  const right = true;
  const left = false;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
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
              <S.CategorySection>1</S.CategorySection>
              <S.CategorySection>2</S.CategorySection>
              <S.CategorySection>3</S.CategorySection>
              <S.CategorySection>4</S.CategorySection>
              <S.CategorySection>5</S.CategorySection>
              <S.CategorySection>6</S.CategorySection>
            </S.CarouselStyled>
          </S.FlexPosition>
        </S.CategoryListContainer>
      </S.BottomContainer>
    </S.CategoryContainer>
  );
};

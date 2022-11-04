import React from 'react';
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
            <S.CategorySection></S.CategorySection>
            <S.CategorySection></S.CategorySection>
            <S.CategorySection></S.CategorySection>
            <S.CategorySection></S.CategorySection>
            <S.CategorySection></S.CategorySection>
            <S.CategorySection></S.CategorySection>
          </S.FlexPosition>
        </S.CategoryListContainer>
      </S.BottomContainer>
    </S.CategoryContainer>
  );
};

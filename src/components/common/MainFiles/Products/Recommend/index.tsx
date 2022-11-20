import React from 'react';
import { Title } from '../../ProductComponent';
import { Card } from '../../ProductComponent/Card/styled';

import * as S from './styled';

export const Recommend: React.FC = () => {
  return (
    <S.RecommendContainer>
      <S.RecommendBanner>
        <S.TitleContainer>
          <Title TitleProp="추천 상품" />
        </S.TitleContainer>
        <S.Flex>
          <S.CardContainer>
            <S.Section1>
              <S.CardMargin>
                <Card />
              </S.CardMargin>
              <S.CardMargin>
                <Card />
              </S.CardMargin>
              <S.CardMargin>
                <Card />
              </S.CardMargin>
            </S.Section1>
            <S.Section2>
              <S.CardMargin>
                <Card />
              </S.CardMargin>
              <S.CardMargin>
                <Card />
              </S.CardMargin>
              <S.CardMargin>
                <Card />
              </S.CardMargin>
            </S.Section2>
          </S.CardContainer>
        </S.Flex>
      </S.RecommendBanner>
    </S.RecommendContainer>
  );
};

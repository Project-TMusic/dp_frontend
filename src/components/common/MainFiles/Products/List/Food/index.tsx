import React from 'react';
import * as S from './styled';
import { Card, Empty, Recommend } from 'src/components';

export const Food: React.FC = () => {
  return (
    <S.Flex>
      <S.Container>
        <Card cardtitleprops="aasd" priceprops={1000} imgprops="asd" />
        <Empty />
        <Card cardtitleprops="aasd" priceprops={1000} imgprops="asd" />
        <Empty />
        <Card cardtitleprops="aasd" priceprops={1000} imgprops="asd" />
      </S.Container>
      <S.ReContainer>
        <Recommend />
      </S.ReContainer>
    </S.Flex>
  );
};

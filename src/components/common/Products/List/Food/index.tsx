import React from 'react';
import * as S from './styled';
import { Card, Empty } from 'src/components';

export const Food: React.FC = () => {
  return (
    <>
      <Card cardtitleprops="aasd" priceprops={1000} imgprops="asd" />
      <Empty />
      <Card cardtitleprops="aasd" priceprops={1000} imgprops="asd" />
      <Empty />
      <Card cardtitleprops="aasd" priceprops={1000} imgprops="asd" />
    </>
  );
};

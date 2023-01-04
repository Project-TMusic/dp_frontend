import React from 'react';
import * as S from './styled';

export interface BannerImg {
  ImgSrc: string;
}

export const DetailBanner: React.FC<BannerImg> = ({ ImgSrc }) => {
  return (
    <S.BannerDiv>
      <S.BannerImg src={ImgSrc} />
    </S.BannerDiv>
  );
};

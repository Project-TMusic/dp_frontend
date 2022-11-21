import React from 'react';
import * as S from './styled';

export const EmptyCircle: React.FC = () => {
  return (
    <S.CircleContainer>
      <S.LeftCircle>
        <S.Circle />
      </S.LeftCircle>
      <S.dotsLine />
      <S.RightCircle>
        <S.Circle />
      </S.RightCircle>
    </S.CircleContainer>
  );
};

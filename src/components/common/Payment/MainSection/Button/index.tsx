import React from 'react';
import * as S from './styled';

export const PayButton: React.FC = () => {
  return (
    <S.SixLineContainer>
      <S.PayButton>
        <S.PayButtonText>결제하기</S.PayButtonText>
      </S.PayButton>
    </S.SixLineContainer>
  );
};

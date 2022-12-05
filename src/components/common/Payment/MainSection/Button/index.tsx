import React from 'react';
import { useNavigate } from 'react-router';
import * as S from './styled';

export interface EnableType {
  enable: boolean;
}

export const PayButton: React.FC<EnableType> = ({ enable }) => {
  const navigate = useNavigate();
  const GoToOnClick = () => {
    navigate('/');
  };
  return (
    <S.SixLineContainer>
      <S.PayButton
        onClick={GoToOnClick}
        disabled={enable}
        style={{ backgroundColor: enable ? '#afafaf' : '' }}
      >
        <S.PayButtonText>결제하기</S.PayButtonText>
      </S.PayButton>
    </S.SixLineContainer>
  );
};

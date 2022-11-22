import React from 'react';
import * as S from './styled';

export const LoginBottom: React.FC = () => {
  return (
    <>
      <S.horizontalContainer>
        <S.horizontalLineLeft />
        <S.horizontalText>or</S.horizontalText>
        <S.horizontalLineRight />
      </S.horizontalContainer>
      <S.OtherOptionContainer>
        <S.OtherOptionText to="/register">계정이 없으신가요?</S.OtherOptionText>
      </S.OtherOptionContainer>
    </>
  );
};

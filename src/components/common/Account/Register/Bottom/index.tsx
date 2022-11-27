import React from 'react';
import * as S from './styled';

export const RegisterBottom: React.FC = () => {
  return (
    <>
      <S.horizontalContainer>
        <S.horizontalLineLeft />
        <S.horizontalText>or</S.horizontalText>
        <S.horizontalLineRight />
      </S.horizontalContainer>
      <S.OtherOptionContainer>
        <S.OtherOptionText to="/login">
          이미 계정이 있으신가요?
        </S.OtherOptionText>
      </S.OtherOptionContainer>
    </>
  );
};

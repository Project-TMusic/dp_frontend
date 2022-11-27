import React from 'react';
import * as S from './styled';

export const FiveLine: React.FC = () => {
  return (
    <S.FiveLineContainer>
      <S.FiveLineLeft>
        <S.FiveLineTitle>카드 비밀번호</S.FiveLineTitle>
        <S.FiveLineHelp>카드 비밀번호를 입력해주세요.</S.FiveLineHelp>
      </S.FiveLineLeft>
      <S.FiveLineRight>
        <S.FiveLineFiveContainer>
          <S.FiveLineFive type="password" />
        </S.FiveLineFiveContainer>
      </S.FiveLineRight>
    </S.FiveLineContainer>
  );
};

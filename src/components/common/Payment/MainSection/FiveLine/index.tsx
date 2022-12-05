import React from 'react';
import * as S from './styled';

export interface PayPasswordType {
  PayPassword: any;
}

export const FiveLine: React.FC<PayPasswordType> = ({ PayPassword }) => {
  return (
    <S.FiveLineContainer>
      <S.FiveLineLeft>
        <S.FiveLineTitle>카드 비밀번호</S.FiveLineTitle>
        <S.FiveLineHelp>카드 비밀번호를 입력해주세요.</S.FiveLineHelp>
      </S.FiveLineLeft>
      <S.FiveLineRight>
        <S.FiveLineFiveContainer>
          <S.FiveLineFive
            type="password"
            onChange={(event) => {
              PayPassword(event.target.value);
            }}
          />
        </S.FiveLineFiveContainer>
      </S.FiveLineRight>
    </S.FiveLineContainer>
  );
};

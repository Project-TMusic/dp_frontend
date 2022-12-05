import React from 'react';
import * as S from './styled';

export interface AvailableDataType {
  MM: any;
  YY: any;
}

export const FourLine: React.FC<AvailableDataType> = ({ MM, YY }) => {
  return (
    <S.FourLineContainer>
      <S.FourLineLeft>
        <S.FourLineTitle>유효날짜</S.FourLineTitle>
        <S.FourLineHelp>
          카드 앞면에 표시되어 있는 날짜를 입력해주세요. <br />
          ex&#41; MM/YY
        </S.FourLineHelp>
      </S.FourLineLeft>
      <S.FourLineRight>
        <S.FourLineMMContainer>
          <S.FourLineMM
            maxLength={2}
            onChange={(event) => {
              MM(event.target.value);
            }}
          />
        </S.FourLineMMContainer>
        <S.slash>/</S.slash>
        <S.FourLineYYContainer>
          <S.FourLineYY
            maxLength={2}
            onChange={(event) => {
              YY(event.target.value);
            }}
          />
        </S.FourLineYYContainer>
      </S.FourLineRight>
    </S.FourLineContainer>
  );
};

import React from 'react';
import * as S from './styled';

export interface TwoLineInputType {
  setOneNumber: any;
  setTwoNumber: any;
  setThreeNumber: any;
  setFourNumber: any;
  check: any;
}

export const TwoLine: React.FC<TwoLineInputType> = ({
  setOneNumber,
  setTwoNumber,
  setThreeNumber,
  setFourNumber,
  check,
}) => {
  return (
    <S.TwoLineContainer>
      <S.TwoLineTitle>카드번호</S.TwoLineTitle>
      <S.TwoLineHelp>카드 16자리 숫자를 입력해주세요.</S.TwoLineHelp>
      <S.TwoLineInputCardNumberContainer>
        {check ? (
          <S.TwoLineCheckImg src="https://cdn-icons-png.flaticon.com/512/5610/5610944.png" />
        ) : (
          <div style={{ width: '6rem' }}></div>
        )}
        <S.TwoLineInputCardSet>
          <S.TwoLineInputCardNumber
            onChange={(event) => {
              setOneNumber(event.target.value);
            }}
            maxLength={4}
          />
          -
          <S.TwoLineInputCardNumber
            onChange={(event) => {
              setTwoNumber(event.target.value);
            }}
            maxLength={4}
            type="password"
          />
          -
          <S.TwoLineInputCardNumber
            onChange={(event) => {
              setThreeNumber(event.target.value);
            }}
            maxLength={4}
            type="password"
          />
          -
          <S.TwoLineInputCardNumber
            onChange={(event) => {
              setFourNumber(event.target.value);
            }}
            maxLength={4}
            type="password"
          />
        </S.TwoLineInputCardSet>
      </S.TwoLineInputCardNumberContainer>
    </S.TwoLineContainer>
  );
};

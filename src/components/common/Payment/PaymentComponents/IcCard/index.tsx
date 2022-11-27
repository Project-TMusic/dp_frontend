import React, { useState } from 'react';
import * as S from './style';

export interface CardNumberType {
  OneNumber: any;
  TwoNumber: any;
  ThreeNumber: any;
  FourNumber: any;
}

export const IcCard: React.FC<CardNumberType> = ({
  OneNumber,
  TwoNumber,
  ThreeNumber,
  FourNumber,
}) => {
  let star1 = '';
  let star2 = '';
  let star3 = '';
  let i = 0;
  for (i = 1; i < 5; i++) {
    if (TwoNumber.length == i) {
      star1 = '*'.repeat(i);
    }
    if (ThreeNumber.length == i) {
      star2 = '*'.repeat(i);
    }
    if (FourNumber.length == i) {
      star3 = '*'.repeat(i);
    }
  }
  return (
    <S.icCardContainer>
      <S.icCardNeonSignContainer>
        <S.icCardNeonSign />
      </S.icCardNeonSignContainer>
      <S.icCard>
        <S.icCardLineContainer>
          <S.icCardArrowTopContainer>
            <S.icCardArrowTop />
          </S.icCardArrowTopContainer>
          <S.icImg src="https://i.postimg.cc/8zS2J0TL/icCard.png" />
          <S.icCardLineBottomContainer>
            <S.icCardLineBottom />
          </S.icCardLineBottomContainer>
        </S.icCardLineContainer>
        <S.icCardInfo>
          <S.icCardNameContainer>
            <S.icCardName>박준희</S.icCardName>
          </S.icCardNameContainer>
          <S.icCardNumberContainer>
            <S.icCardNumber>
              {OneNumber}
              <S.Empty />
              {star1 == '' ? <div style={{ width: '2rem' }}></div> : star1}
              <S.Empty />{' '}
              {star2 == '' ? <div style={{ width: '2rem' }}></div> : star2}{' '}
              <S.Empty />
              {star3 == '' ? <div style={{ width: '2rem' }}></div> : star3}
            </S.icCardNumber>
          </S.icCardNumberContainer>
          <S.ExpirationPeriodContainer>
            <S.ExpirationPeriod>00/00</S.ExpirationPeriod>
          </S.ExpirationPeriodContainer>
        </S.icCardInfo>
      </S.icCard>
    </S.icCardContainer>
  );
};

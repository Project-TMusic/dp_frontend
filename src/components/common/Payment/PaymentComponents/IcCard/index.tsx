import React, { useState } from 'react';
import * as S from './style';

export const IcCard: React.FC = () => {
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
              1234
              <S.Empty /> 5678
              <S.Empty /> 8901 <S.Empty />
              1512
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

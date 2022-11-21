import React from 'react';
import * as S from './styled';
import { IcCard, Receipt } from './PaymentComponents';

export const Payment: React.FC = () => {
  return (
    <>
      <S.CardContent>
        <Receipt />
        <IcCard />
      </S.CardContent>
    </>
  );
};

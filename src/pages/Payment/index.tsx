import React, { useState } from 'react';
import {
  EmptyCircle,
  FiveLine,
  FourLine,
  IcCard,
  Receipt,
  ThreeLine,
  TwoLine,
} from 'src/components';
import { OneLine } from 'src/components/common/Payment/MainSection/OneLine';

import * as S from './styled';

export const PaymentPage: React.FC = () => {
  const [oneNumber, setOneNumber] = useState('');
  const [twoNumber, setTwoNumber] = useState('');
  const [threeNumber, setThreeNumber] = useState('');
  const [fourNumber, setFourNumber] = useState('');

  let check = false;
  if (
    oneNumber.length == 4 &&
    twoNumber.length == 4 &&
    threeNumber.length == 4 &&
    fourNumber.length == 4
  ) {
    check = true;
  }
  return (
    <>
      <S.CardContent>
        <S.MainSection>
          <OneLine />
          <TwoLine
            check={check}
            setOneNumber={setOneNumber}
            setTwoNumber={setTwoNumber}
            setThreeNumber={setThreeNumber}
            setFourNumber={setFourNumber}
          />
          <ThreeLine />
          <FourLine />
          <FiveLine />
        </S.MainSection>
        <S.Paypaper>
          <Receipt />
          <IcCard
            OneNumber={oneNumber}
            TwoNumber={twoNumber}
            ThreeNumber={threeNumber}
            FourNumber={fourNumber}
          />
          <EmptyCircle />
        </S.Paypaper>
      </S.CardContent>
    </>
  );
};

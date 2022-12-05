import React, { useState } from 'react';
import {
  EmptyCircle,
  FiveLine,
  FourLine,
  IcCard,
  PayButton,
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
  const [cvcNumber, setCvcNumber] = useState('');
  const [MM, setMM] = useState('');
  const [YY, setYY] = useState('');
  const [Pw, setPw] = useState('');
  let enable = true;
  let check = false;
  if (
    cvcNumber.length == 3 &&
    MM.length == 2 &&
    YY.length == 2 &&
    Pw.length > 1
  ) {
    enable = false;
    console.log('바뀜');
  } else {
    enable = true;
    console.log('false');
  }
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
          <ThreeLine setCvcNumber={setCvcNumber} />
          <FourLine MM={setMM} YY={setYY} />
          <FiveLine PayPassword={setPw} />
          <PayButton enable={enable} />
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

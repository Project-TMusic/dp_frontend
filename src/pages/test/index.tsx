import React, { useState, useEffect } from 'react';
import * as S from './styled';
import { useRecoilState } from 'recoil';
import { todoAtom } from 'src/atoms';
import { ITodo } from 'src/types/interfaces';

export const TestPage: React.FC = () => {
  const [sticky, setSticky] = useState(0);
  const listenScrollEvent = () => {
    if (window.scrollY > 500) {
      setSticky(1);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.addEventListener('scroll', listenScrollEvent);
    };
  }, []);
  const [address, setAddress] = useRecoilState<ITodo>(todoAtom);
  return (
    <S.heightPadding>
      <S.container>
        <S.sidebar>
          <S.stick style={{ opacity: sticky }}>엉</S.stick>
        </S.sidebar>
        <S.longtext>
          {address.name}
          {address.address}
        </S.longtext>
      </S.container>
    </S.heightPadding>
  );
};

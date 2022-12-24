import React, { useState, useEffect, useRef } from 'react';
import * as S from './styled';

export const TestPage2: React.FC = () => {
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.addEventListener('scroll', handleScroll);
    };
  });

  const cls = visible ? true : false;
  return (
    <div>
      <S.Header ScrollBoolean={cls}></S.Header>
      <S.asd>asd</S.asd>
      <S.asd>asd</S.asd>
      <S.asd>asd</S.asd>
    </div>
  );
};

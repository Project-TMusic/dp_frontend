import React from 'react';
import * as S from './styled';

export const ThreeLine: React.FC = () => {
  return (
    <S.ThreeLineContainer>
      <S.ThreeLineLeft>
        <S.ThreeLineTitle>CVC 숫자</S.ThreeLineTitle>
        <S.ThreeLineHelp>
          카드 뒷 편에 있는 csv번호를 입력해주세요.
        </S.ThreeLineHelp>
      </S.ThreeLineLeft>
      <S.ThreeLineRight>
        <S.ThreeLineCVCContainer>
          <S.ThreeLineCVC maxLength={3} />
        </S.ThreeLineCVCContainer>
      </S.ThreeLineRight>
    </S.ThreeLineContainer>
  );
};

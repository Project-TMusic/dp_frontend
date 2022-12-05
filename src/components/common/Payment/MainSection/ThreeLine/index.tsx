import React from 'react';
import * as S from './styled';

export interface CvcType {
  setCvcNumber: any;
}

export const ThreeLine: React.FC<CvcType> = ({ setCvcNumber }) => {
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
          <S.ThreeLineCVC
            maxLength={3}
            onChange={(event) => {
              setCvcNumber(event.target.value);
            }}
          />
        </S.ThreeLineCVCContainer>
      </S.ThreeLineRight>
    </S.ThreeLineContainer>
  );
};

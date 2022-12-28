import React from 'react';
import * as S from './styled';

export interface AboutOurVisionData {
  VisionText: string;
  VisionIcon: any;
}

export const AboutVision: React.FC<AboutOurVisionData> = ({
  VisionText,
  VisionIcon,
}) => {
  return (
    <S.AboutCardElement>
      <S.AboutCardElementImage src={VisionIcon} />
      <S.AboutCardElementText>{VisionText}</S.AboutCardElementText>
    </S.AboutCardElement>
  );
};

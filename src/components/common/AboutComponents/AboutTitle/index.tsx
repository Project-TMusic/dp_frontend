import React from 'react';
import * as S from './styled';

export interface AboutTitlePropsTypes {
  AboutTitleTextProps: string;
  AboutTitleFontSize: string;
  AboutTitleFontCenter: string;
  AboutTitleFontWeight: string;
}

export const AboutTitle: React.FC<AboutTitlePropsTypes> = ({
  AboutTitleFontSize,
  AboutTitleFontCenter,
  AboutTitleFontWeight,
  AboutTitleTextProps,
}) => {
  return (
    <S.AboutTitleText
      AboutTitleFontSize={AboutTitleFontSize}
      AboutTitleFontCenter={AboutTitleFontCenter}
      AboutTitleFontWeight={AboutTitleFontWeight}
    >
      {AboutTitleTextProps}
    </S.AboutTitleText>
  );
};

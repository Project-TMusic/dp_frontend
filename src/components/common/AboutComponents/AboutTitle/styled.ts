import styled from '@emotion/styled';

export const AboutTitleText = styled.div<{
  AboutTitleFontSize: string;
  AboutTitleFontWeight: string;
  AboutTitleFontCenter: string;
}>`
  font-size: ${(props) => props.AboutTitleFontSize};
  font-weight: ${(props) => props.AboutTitleFontWeight};
  text-align: ${(props) => props.AboutTitleFontCenter};
  margin-bottom: 4rem;
  letter-spacing: 0.5px;
  margin: auto;
`;

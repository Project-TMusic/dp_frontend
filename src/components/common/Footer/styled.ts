import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.8);
  padding-top: 6rem;
`;

export const coverMargin = styled.div`
  width: 100%;
  padding-bottom: 8rem;
  display: flex;
`;

export const AboutContainer = styled.div`
  margin-left: 40%;
`;

export const About = styled.div`
  font-family: 'Pretendard';
  font-size: 3rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.8);
`;

export const CompanyInfoContainer = styled.div`
  margin-left: 14%;
`;

export const CompanyInfo = styled.div`
  font-family: 'Pretendard';
  font-size: 3rem;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.8);
`;

export const FooterText = styled.div`
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.3);
  margin-top: 2rem;
`;

export const FooterAboutUsLink = styled(Link)`
  display: inline-block;
  margin-top: 2rem;
  font-size: 1.5rem;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
`;

export const FooterLogoContainer = styled.div``;

export const FooterLogo = styled.div`
  width: 30rem;
  padding-top: 15rem;
  margin-top: 1rem;
  margin-left: 5rem;
  background: gray;
`;

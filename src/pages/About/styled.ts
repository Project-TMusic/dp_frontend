import styled from '@emotion/styled';

export const AboutContainer = styled.div`
  padding-bottom: 30rem;
`;

export const Flex = styled.div`
  display: flex;
  padding-top: 10rem;
`;

export const Logo = styled.img`
  width: 35rem;
  height: 35rem;
  margin-left: 20rem;
  background-color: gray;
`;

export const Description = styled.div`
  position: sticky;
  top: 0;
  opacity: 0.5;
  backdrop-filter: blur(30px);
  width: 30%;
  margin-left: 35rem;
  line-height: 3rem;
  font-size: 17px;
`;

export const DescriptionTitle = styled.div`
  position: sticky;
  font-size: 3rem;
  font-weight: bold;
  padding-bottom: 2rem;
  letter-spacing: 0.3rem;
`;

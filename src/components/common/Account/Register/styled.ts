import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RegisterBackground = styled.div`
  background-color: #fff;
  position: fixed;
  width: 60%;
  height: 100%;
  display: flex;
  @media screen and (max-width: 1650px) {
    width: 70%;
  }
  @media screen and (max-width: 1400px) {
    width: 80%;
  }
`;

export const RegisterContainer = styled.div`
  width: 70%;
  height: 60%;
  margin: auto;
  margin-left: 60rem;
  @media screen and (max-width: 1200px) {
    margin-left: 30rem;
  }
  @media screen and (max-width: 900px) {
    margin-left: 15rem;
  }
  @media screen and (max-width: 768px) {
    margin-left: 5rem;
  }
`;

export const RegisterTitle = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-weight: bold;
  font-size: 2.6rem;
  letter-spacing: 0.1rem;
`;

export const RegisterDescription = styled.div`
  margin-top: 2rem;
  padding-bottom: 5rem;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1.7rem;
`;

export const RegisterAuthContainer = styled.div`
  width: 34.5rem;
  background: rgba(0, 0, 0, 0.04);
  margin-top: 1.2rem;
  border-radius: 0.6rem;
  &:focus-within {
    background: rgba(0, 0, 0, 0.08);
  }
`;

export const RegisterInput = styled.input`
  width: 80%;
  border: none;
  background: none;
  font-weight: bold;
  border-radius: 0.6rem;
  @media screen and (max-width: 768px) {
    font-size: 2rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  outline: none;
  margin-left: 1rem;
  ::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export const RegisterButton = styled.button`
  width: 34.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  border: none;
  background: rgba(138, 170, 229, 0.3);
  :hover {
    background: rgba(138, 170, 229, 0.6);
  }
  border-radius: 0.6rem;
  font-size: 2rem;
  font-weight: bold;
  margin-top: 5rem;
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const horizontalContainer = styled.div`
  display: flex;
  margin-top: 1rem;
  @media screen and (max-width: 400px) {
    margin-left: -2rem;
  }
`;

export const horizontalLineLeft = styled.div`
  height: 0.1rem;
  width: 15rem;
  background: rgba(0, 0, 0, 0.15);
  margin-top: 0.8rem;
  @media screen and (max-width: 768px) {
    padding-left: 15rem;
  }
`;

export const horizontalText = styled.div`
  margin-left: 1.5rem;
  font-size: 1.4rem;
  color: rgba(0, 0, 0, 0.2);
`;

export const horizontalLineRight = styled.div`
  height: 0.1rem;
  width: 15rem;
  background: rgba(0, 0, 0, 0.15);
  margin-left: 1.7rem;
  margin-top: 0.8rem;
  @media screen and (max-width: 768px) {
    padding-left: 15rem;
  }
`;

export const OtherOptionContainer = styled.div`
  margin-top: 1rem;
`;

export const OtherOptionText = styled(Link)`
  width: 11rem;
  font-size: 1.5rem;
  color: rgba(0, 0, 0, 0.65);
  user-select: none;
  text-decoration: none;
  :hover {
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }
`;

import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const RegisterBackground = styled.div`
  background-color: #e6e6e6;
  width: 100%;
  height: 100vh;
`;

export const RegisterContainer = styled.div`
  position: relative;
  background-color: #f2f2f2;
  left: 35%;
  top: 10%;
  width: 30%;
  height: 70%;
  border: 1px solid #848484;
  box-shadow: 1em 1em 0.4em #848484;
`;

export const RegisterTitle = styled.div`
  text-align: center;
  padding-top: 5rem;
  font-size: 3.5rem;
  font-weight: bold;
`;

export const RegisterText = styled.div`
  position: relative;
  left: 10%;
  top: 3.5%;
  font-size: 1.5rem;
`;

export const RegisterInput = styled.input`
  margin-left: 5rem;
  margin-top: 2.5rem;
  width: 80%;
  height: 4rem;
  border: 1px solid #848484;
  border-radius: 0.5rem;
`;

export const RegisterButton = styled.button`
  position: relative;
  background-color: #8aaae5;
  margin-left: 5rem;
  margin-top: 6rem;
  font-size: 2rem;
  font-weight: bold;
  width: 80%;
  height: 4rem;
  border-radius: 0.5rem;
  cursor: pointer;
  &:hover {
    background-color: #7d9ffa;
  }
`;

export const LoginLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

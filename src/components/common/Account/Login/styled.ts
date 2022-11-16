import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const LoginBackground = styled.div`
  background-color: #e6e6e6;
  width: 100%;
  height: 100vh;
`;

export const LoginContainer = styled.div`
  position: relative;
  background-color: #f2f2f2;
  left: 35%;
  top: 20%;
  width: 30%;
  height: 45%;
  border: 1px solid #848484;
  box-shadow: 1em 1em 0.4em #848484;
`;

export const LoginTitle = styled.div`
  text-align: center;
  padding-top: 5rem;
  font-size: 3.5rem;
  font-weight: bold;
`;

export const LoginText = styled.div`
  position: relative;
  left: 10%;
  top: 5.5%;
  font-size: 1.5rem;
`;

export const LoginInput = styled.input`
  margin-left: 5rem;
  margin-top: 3rem;
  width: 80%;
  height: 4rem;
  border: 1px solid #848484;
  border-radius: 0.5rem;
`;

export const RegisterLink = styled(Link)`
  position: relative;
  bottom: 1.5rem;
  text-decoration: none;
  color: #4f7cfb;
  &:hover {
    color: #2f6dfb;
  }
`;

export const LoginButton = styled.button`
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

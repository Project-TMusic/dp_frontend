import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const CardContainer = styled(NavLink)`
  margin-top: 2rem;
  margin-bottom: 2rem;
  color: black;
  text-decoration: none;
`;

export const Card = styled.div`
  width: 26rem;
  height: 20rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  background-color: #fff;
`;

export const nameText = styled.div``;

export const CardImg = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-radius: 2rem 2rem 0 0;
`;

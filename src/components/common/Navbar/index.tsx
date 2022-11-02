import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styled';

export const Navbar: React.FC = () => {
  return (
    <S.NavbarContainer>
      <S.LogoContainer>
        <S.Logo>
          <S.LogoText>dp</S.LogoText>
        </S.Logo>
      </S.LogoContainer>
      <S.MenuContainer>
        <S.MenusLinkContainer>
          <S.Home>Home</S.Home>
          <S.MenuLink>카테고리</S.MenuLink>
          <S.MenuLink>상품</S.MenuLink>
          <S.MenuLink>
            <Link to="about">About us</Link>
          </S.MenuLink>
        </S.MenusLinkContainer>
        <S.ProfileContainer>
          <S.Wish></S.Wish>
          <S.Basket></S.Basket>
          <S.HelloUser>Hello, User</S.HelloUser>
          <S.Profile></S.Profile>
        </S.ProfileContainer>
      </S.MenuContainer>
    </S.NavbarContainer>
  );
};

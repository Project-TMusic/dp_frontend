import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isOpenClicked = () => {
    setIsOpen(!isOpen);
  };
  const isProfile: boolean = useMediaQuery({
    query: '(max-width:872px)',
  });
  const [scrollPosition, setScrollPosition] = useState(false);
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setScrollPosition(true) : setScrollPosition(false);
  };
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => {
      window.removeEventListener('scroll', listenScrollEvent);
    };
  }, []);
  return (
    <S.NavbarContainer scrollPosition={scrollPosition}>
      <S.LogoContainer>
        <S.Logo>
          <S.LogoText>
            <S.DPLink to="/">dp</S.DPLink>
          </S.LogoText>
        </S.Logo>
      </S.LogoContainer>
      <S.MenuContainer>
        <S.MenusLinkContainer>
          <S.Home>Home</S.Home>
          <S.MenuLink>카테고리</S.MenuLink>
          <S.MenuLink>상품</S.MenuLink>
          <S.MenuLink>
            <S.NavLink to="/about">About us</S.NavLink>
          </S.MenuLink>
        </S.MenusLinkContainer>
        {isProfile ? (
          <S.ResponsiveContainer>
            <S.ResponsiveProfile onClick={isOpenClicked}>
              <S.ArrowProfileContainer>
                <S.ResponsiveProfileText>프로필</S.ResponsiveProfileText>
                <S.ArrowContainer>
                  <S.Arrow ArrowProps={isOpen} />
                </S.ArrowContainer>
              </S.ArrowProfileContainer>
            </S.ResponsiveProfile>
            {isProfile ? (
              isOpen ? (
                <S.ProfileBoxContainer>
                  <S.ProfileBox></S.ProfileBox>
                </S.ProfileBoxContainer>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </S.ResponsiveContainer>
        ) : (
          <S.ProfileContainer>
            <S.Wish></S.Wish>
            <S.Basket></S.Basket>
            <S.HelloUser>
              <S.ProfileLink to="/profile">프로필</S.ProfileLink>
            </S.HelloUser>
            <S.Profile></S.Profile>
          </S.ProfileContainer>
        )}
      </S.MenuContainer>
    </S.NavbarContainer>
  );
};

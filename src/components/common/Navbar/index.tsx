import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';

export interface UserInfo {
  username: string;
}

export const Navbar: React.FC<UserInfo> = (username) => {
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

  const [isActive, setIsActive] = useState(false);
  const inActiveClicked = () => {
    setIsActive(!isActive);
    console.log(isActive);
  };
  const onBlurClicked = () => {
    setIsActive(!isActive);
  };
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
        <S.SearchBarContainer>
          <S.SearchInput
            onBlur={onBlurClicked}
            SearchProps={isActive}
            type="text"
            placeholder="Search"
          />
          <S.SearchIcon onClick={inActiveClicked}>🔍</S.SearchIcon>
        </S.SearchBarContainer>
        <S.MenusLinkContainer SearchProps={isActive}>
          <S.HomeLink to="/">Home</S.HomeLink>
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
          <S.ProfileContainer SearchProps={isActive}>
            <S.Wish to="/wish"></S.Wish>
            <S.Basket to="/cart"></S.Basket>
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

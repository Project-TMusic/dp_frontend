import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import { DUMMY_ITEM_Food } from 'src/api';

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

  const [searchTerm, setSearchTerm] = useState('');
  const searchHandler = (e: any) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };
  {
    DUMMY_ITEM_Food.filter((value) => {
      if (searchTerm === '') {
        return console.log('비어있음');
      } else if (value.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return console.log(value.name, '여기여');
      }
    });
  }
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
            onChange={searchHandler}
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

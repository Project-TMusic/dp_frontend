import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import * as S from './styled';
import { DUMMY_ITEM_Food, DUMMY_ITEM_Clothes, All_Product } from 'src/api';
import { useLocation, useNavigate } from 'react-router';

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
  const [position, setPosition] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const location = useLocation();
  const asd = location.pathname.split('/')[1];
  {
    asd === 'about'
      ? useEffect(() => {
          const handleScroll = () => {
            const moving = window.pageYOffset;

            setVisible(position > moving);
            setPosition(moving);
          };
          window.addEventListener('scroll', handleScroll);
          return () => {
            window.addEventListener('scroll', handleScroll);
          };
        })
      : null;
  }
  const cls = visible ? true : false;
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

  const navigate = useNavigate();

  const search = (e: any) => {
    if (e.key === 'Enter') {
      const item = e.target.value;
      navigate(`/search?q=${item}`);
    }
  };

  return (
    <S.NavbarContainer scrollShowNav={cls} scrollPosition={scrollPosition}>
      <S.LogoContainer>
        <S.Logo>
          <S.LogoText>
            <S.DPLink to="/">dp</S.DPLink>
          </S.LogoText>
        </S.Logo>
      </S.LogoContainer>
      <S.MenuContainer>
        <S.SearchBarContainer>
          <div style={{ display: 'flex' }}>
            <S.SearchInput
              onBlur={onBlurClicked}
              SearchProps={isActive}
              onChange={searchHandler}
              onKeyPress={(e) => search(e)}
              type="text"
              placeholder="Search"
            />
            <S.SearchIcon onClick={inActiveClicked}>🔍</S.SearchIcon>
          </div>
          {All_Product.filter((value) => {
            if (searchTerm === '') {
              return 0;
            } else if (
              value.name.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return value;
            }
          }).map((value, key) => {
            return isActive ? (
              <S.SearchResultContainer>
                <S.SearchResult key={key}>
                  <S.SearchResultText to={`/search/results/${value.name}`}>
                    {value.name}
                  </S.SearchResultText>
                </S.SearchResult>
              </S.SearchResultContainer>
            ) : (
              <></>
            );
          })}
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

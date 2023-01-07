import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div<{
  scrollPosition: boolean;
  scrollShowNav: boolean;
}>`
  position: fixed;
  z-index: 100;
  width: 100%;
  padding-top: 1rem;
  top: ${(props) => (props.scrollShowNav ? 0 : '-90px')};
  display: flex;
  background-color: #f7f7f7;
  border-bottom: ${(props) =>
    props.scrollPosition ? '1px solid #e5e5e5' : ''};
  transition: top 0.4s ease-out;
`;

export const LogoContainer = styled.div`
  margin-bottom: 0.5rem;
  margin-left: 13%;
  @media screen and (min-width: 1200px) {
    margin-left: 15%;
  }
`;

export const Logo = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  border-radius: 1.5rem;
`;

export const LogoText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  margin-left: 5rem;
  padding-top: 2rem;
`;

export const DPLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const MenuContainer = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;
  margin-left: 16rem;
  display: flex;
  @media screen and (max-width: 1300px) {
    margin-left: 10rem;
  }
  @media screen and (max-width: 1250px) {
    margin-left: 3rem;
  }

  @media screen and (min-width: 1100px) {
    margin-left: 9rem;
  }
  @media screen and (min-width: 1260px) {
    margin-left: 15%;
  }
`;

export const MenuLink = styled.div`
  font-size: 1.6rem;
  color: black;
  margin: 2.3rem 2rem 0 2rem;
`;

export const HomeLink = styled(Link)`
  font-size: 1.6rem;
  color: #8aaae5;
  margin: 2.3rem 2rem 0 2rem;
  text-decoration: none;
`;

export const Wish = styled(Link)`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  background-color: pink;
  margin-top: 1.7rem;
`;

export const Basket = styled(Link)`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  background-color: green;
  margin: 1.7rem 2rem 0 2rem;
`;

export const Profile = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 2rem;
  background-color: black;
  margin-top: 1.7rem;
`;

export const ProfileContainer = styled.div<{ SearchProps: boolean }>`
  margin-left: ${(props) => (props.SearchProps ? '6rem' : '20rem')};
  display: flex;

  @media screen and (max-width: 1300px) {
    margin-left: ${(props) => (props.SearchProps ? '3rem' : '8rem')};
  }
  @media screen and (max-width: 1060px) {
    margin-left: ${(props) => (props.SearchProps ? '3rem' : '5rem')};
  }
`;

export const MenusLinkContainer = styled.div<{ SearchProps: boolean }>`
  display: flex;
  margin-left: -8rem;
  font-weight: bold;
  @media screen and (max-width: 1000px) {
    margin-left: 0;
  }

  display: ${(props) => (props.SearchProps ? 'none' : '')};
`;

export const HelloUser = styled.div`
  font-size: 1.6rem;
  color: black;
  margin: 2.5rem 2rem 0 2.5rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const ResponsiveProfile = styled.div`
  width: 10rem;
  height: 4rem;
  z-index: 99;
  background-color: #fff;
  margin-top: 1rem;
  margin-left: 5rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 1.5rem;
  display: flex;
  flex-direction: row;
`;

export const ResponsiveProfileText = styled.div`
  margin-top: 1.2rem;
  margin-left: 2rem;
`;

export const ArrowContainer = styled.div`
  margin: 1.5rem 0 0 1rem;
  float: right;
`;
export const Arrow = styled.div<{ ArrowProps: boolean }>`
  height: 0.9rem;
  width: 0.9rem;
  border: 1px solid black;
  border-width: 2px 2px 0 0;
  transition: 0.3s ease;
  transform: ${(props) =>
    props.ArrowProps ? 'rotate(315deg)' : 'rotate(133deg)'};
`;

export const ArrowProfileContainer = styled.div`
  display: flex;
  text-align: center;
`;

export const ProfileBoxContainer = styled.div`
  position: absolute;
  padding-top: 5.2rem;
  padding-left: 5rem;
`;

export const ProfileBox = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 1.5rem;
  background-color: black;
`;

export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ProfileLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

export const SearchBarContainer = styled.div`
  position: relative;

  margin-top: 1.2rem;
  margin-right: 10rem;

  background: #a9d0f5;
  height: 40px;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 0.8s;
  z-index: 99;
`;

export const SearchResultContainer = styled.form`
  position: absolute;
  margin-top: 3rem;
`;

export const SearchResult = styled.div`
  width: 25vw;
  height: 10rem;
  border-radius: 1.5rem;
  background-color: black;
  color: white;
`;

export const SearchResultText = styled(NavLink)`
  margin-left: 1rem;
  color: white;
`;

export const SearchIcon = styled.div``;

export const SearchInput = styled.input<{ SearchProps: boolean }>`
  background: transparent;
  color: black;
  border: none;
  outline: none;
  font-weight: 500;
  font-size: 16px;
  transition: 0.8s;

  &::placeholder {
    color: white;
  }

  width: ${(props) => (props.SearchProps ? '20vw' : '0px')};
`;

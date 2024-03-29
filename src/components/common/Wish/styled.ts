import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const positionCenter = styled.div`
  margin: auto;
`;

export const WishHeaderContainer = styled.div`
  width: 91rem;
  padding-top: 5rem;
`;

export const WishHeader = styled.div`
  padding-top: 2rem;
`;

export const WishHeaderText = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 40px;
  font-weight: 500;
`;

export const WishHeaderUnderLine = styled.div`
  margin-top: 3.5rem;
  height: 0.3rem;
  background: rgba(0, 0, 0, 0.8);
  margin-bottom: 10rem;
`;

export const DropdownContainer = styled.div``;

export const DropdownContent = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5%;
  position: relative;
`;

export const DropdownButton = styled.button`
  padding: 15px 20px;
  background-color: #f4f4f4;
  box-shadow: 0 0 25px -20px #dbdbdb;
  flex: 1;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 4px;
  border: 0.3px solid #919191;

  &:active {
    background-color: #8aaae5;
    color: #fcfcfc;
  }
`;

export const DropdownUnorderdList = styled.ul`
  width: 91rem;
  margin: 0;
  padding: 0;
  top: calc(100% + 5px);
  display: flex;
  gap: 1px;
  border-radius: 4px;
  box-shadow: 0 0 5px #d4d4d4;
  list-style: none;
`;

export const DropdownListItem = styled.button`
  background-color: #fafafa;
  border: none;
  outline: none;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px 20px;
  cursor: pointer;

  &:hover {
    background-color: #8aaae5;
    color: #fcfcfc;
  }
`;

export const WishAllContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WishCenterDisplay = styled.div`
  width: 91rem;
`;

export const WishListContainer = styled.div``;

export const WishListContent = styled(NavLink)`
  display: flex;
  width: 100%;
  height: 18rem;
  background-color: #fff;
  margin: auto;
  margin-top: 2rem;
  transition: all 0.5s;
  font-size: 22px;
  color: black;
  text-decoration: none;
  &:hover {
    box-shadow: 10px 5px 10px rgba(0, 0, 0, 0.05);
  }
`;

export const EmptySpace = styled.div`
  margin-left: 2.5rem;
  margin-right: 2.5rem;
`;

export const WishListImage = styled.img`
  width: 15rem;
  height: 15rem;
  background-color: #e6e6e6;
  object-fit: cover;
  margin: auto;
  margin-left: 1.5rem;
`;

export const WishListDescription = styled.div`
  width: 74rem;
`;

export const WishListTitle = styled.div`
  display: flex;
  padding: 15px 15px;
  width: 85%;
  font-weight: bold;
`;

export const WishListHeart = styled.div`
  font-size: 25px;
  color: red;
  &:hover {
    color: #f78181;
    font-size: 30px;
  }
`;

export const WishListStore = styled.div`
  font-size: 18px;
  margin-left: 10px;
  margin-top: 10px;
  width: 90%;
  line-height: 1.2;
`;

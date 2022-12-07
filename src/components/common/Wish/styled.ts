import styled from '@emotion/styled';

export const WishHeaderContainer = styled.div`
  width: 100%;
  padding-left: 18%;
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
  width: 75%;
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
  margin: 0;
  padding: 0;
  position: absolute;
  top: calc(100% + 5px);
  min-width: 100%;
  width: max-content;
  display: flex;
  flex-direction: column;
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

export const WishCenterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const WishCenterDisplay = styled.div`
  margin: auto;
`;

export const WishListContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const WishListContent = styled.div`
  width: 27rem;
  height: 33rem;
  border-radius: 5%;
  background-color: #d8d8d8;
  margin-top: 5rem;
  margin-left: 5%;
  &:hover {
    box-shadow: 10px 5px 10px #bdbdbd;
  }
`;

export const WishListImage = styled.img`
  width: 100%;
  height: 15rem;
  border-radius: 5% 5% 0% 0%;
  background-color: #e6e6e6;
`;

export const WishListDescription = styled.div`
  display: flex;
`;

export const WishListTitle = styled.div`
  padding: 15px 15px;
  width: 85%;
  font-size: 22px;
  font-weight: bold;
`;

export const WishListHeart = styled.div`
  font-size: 30px;
  margin-top: 13px;
  color: red;

  &:hover {
    color: #f78181;
    font-size: 32px;
  }
`;

export const WishListStore = styled.div`
  font-size: 18px;
  margin-left: 10px;
  margin-top: 10px;
  width: 90%;
  line-height: 1.2;
`;

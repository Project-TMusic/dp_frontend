import styled from '@emotion/styled';

export const SearchResultContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchHeader = styled.div`
  width: 100%;
  padding: 0.8rem 0;
  font-size: 1.8rem;
  border: 1px solid #d4d4d4;
  background-color: #edf1f4;
`;

export const SearchWhat = styled.span`
  padding-left: 0.8rem;
  color: #8aaae5;
  font-weight: bold;
`;

export const SearchCount = styled.span`
  position: absolute;
  left: 18%;
  top: 14%;
  font-weight: bold;
  font-size: 1.8rem;
`;

export const SearchSort = styled.div`
  margin-top: 3.5rem;
  height: 4rem;
  line-height: 4rem;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #d4d4d4;
`;

export const SearchSortText = styled.span`
  margin-top: 0.3rem;
  font-size: 1.4rem;
`;

export const SearchContentContainer = styled.div`
  width: 100%;
  padding-top: 3rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background-color: white;
`;

export const SearchContent = styled.div`
  width: 27%;
  display: flex;
  margin-bottom: 5rem;
  margin-left: 5%;
`;

export const StoreImage = styled.img`
  width: 10rem;
  height: 12rem;
  background-color: black;
`;

export const StoreInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.5rem;
  margin-top: 1rem;
`;

export const Infoflex = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const StoreTitle = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const StoreStar = styled.span`
  font-size: 1.5rem;
  color: yellow;
`;

export const StoreDescSt = styled.span`
  font-size: 1.5rem;
`;

export const StoreDesc = styled.span`
  font-size: 1.5rem;
  margin-left: 1rem;
`;

export const DeliveryTime = styled.div`
  width: 5rem;
  height: 2rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  border-radius: 1rem;
  text-align: center;
  line-height: 2rem;
  background-color: #edf1f4;
`;

import styled from '@emotion/styled';

export const CategoryContainer = styled.div`
  width: 100%;
  padding-top: 12rem;
  background-color: white;
`;

export const CategoryTitleContainer = styled.div`
  width: 20%;
  margin-left: 8vw;
`;

export const CategoryTitle = styled.div`
  font-size: 3rem;
  font-weight: 600;
  text-align: center;
  padding-top: 1.2rem;
`;

export const ArrowContainer = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-right: 17.5rem;
`;

export const positionRight = styled.div`
  display: flex;
  float: right;
`;
export const ArrowLeftContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.05);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2rem;
  margin-right: 3rem;
`;

export const Arrow = styled.div<{ directionProps: boolean }>`
  height: 1rem;
  width: 1rem;
  border: 2px solid black;
  border-width: 2.5px 2.5px 0 0;
  margin: ${(props) =>
    props.directionProps ? '1.2rem 0 0 1.4rem' : '1.2rem 0 0 1.2rem'};
  transform: ${(props) =>
    props.directionProps ? 'rotate(225deg)' : 'rotate(47deg)'};
`;

export const ArrowRightContainer = styled.div`
  background-color: #8aaae5;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2rem;
`;

export const TopContainer = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 5rem;
`;

export const BottomContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const CategoryListContainer = styled.div`
  margin: auto;
`;

export const FlexPosition = styled.div`
  display: flex;
`;

export const CategorySection = styled.div`
  width: 12rem;
  height: 12rem;
  border-radius: 2rem;
  background-color: rgba(0, 0, 0, 0.05);

  margin: 0 3vw 0 3vw;
`;

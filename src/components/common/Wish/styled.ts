import styled from '@emotion/styled';

export const DropdownContainer = styled.div`
  margin-left: 35rem;
`;

export const DropdownContent = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
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
  gap: 2px;
  border-radius: 4px;
  box-shadow: 0 0 5px #d4d4d4;
  list-style: none;
`;

export const DropdownListItem = styled.li`
  background-color: #fafafa;
  border-bottom: 1px solid #d4d4d4;
  padding: 10px 20px;
  cursor: pointer;
  &:hover {
    background-color: #8aaae5;
    color: #fcfcfc;
  }
`;

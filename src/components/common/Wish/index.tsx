import React, { useRef, useState } from 'react';
import * as S from './styled';

export const Wish: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdown = (s: boolean) => {
    setOpen(!s);
  };
  const handleClickOutsideDropdown = (e: any) => {
    if (open && !dropdownRef.current?.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <S.WishCenterContainer>
      <S.DropdownContainer>
        <S.DropdownContent ref={dropdownRef}>
          <S.DropdownButton onClick={() => handleDropdown(open)}>
            카테고리
          </S.DropdownButton>
          {open && (
            <S.DropdownUnorderdList>
              <S.DropdownListItem>Food</S.DropdownListItem>
              <S.DropdownListItem>Clothes</S.DropdownListItem>
              <S.DropdownListItem>Health</S.DropdownListItem>
              <S.DropdownListItem>Tool</S.DropdownListItem>
            </S.DropdownUnorderdList>
          )}
        </S.DropdownContent>
      </S.DropdownContainer>
      <S.WishListContainer>
        <S.WishListContent>
          <S.WishListImage></S.WishListImage>
          <S.WishListDescription>
            <S.WishListTitle>준희네 떡볶이 남가좌동점</S.WishListTitle>
            <S.WishListHeart>❤️</S.WishListHeart>
          </S.WishListDescription>
          <S.WishListStore>
            가게 설명 가게 설명 가게 설명 가게 설명 가게 설명 가게 설명 가게
            설명 가게 설명 가게 설명
          </S.WishListStore>
        </S.WishListContent>
        <S.WishListContent>
          <S.WishListImage></S.WishListImage>
          <S.WishListDescription>
            <S.WishListTitle>준희네 떡볶이 남가좌동점</S.WishListTitle>
            <S.WishListHeart>❤️</S.WishListHeart>
          </S.WishListDescription>
          <S.WishListStore>
            가게 설명 가게 설명 가게 설명 가게 설명 가게 설명 가게 설명 가게
            설명 가게 설명 가게 설명
          </S.WishListStore>
        </S.WishListContent>
        <S.WishListContent>
          <S.WishListImage></S.WishListImage>
          <S.WishListDescription>
            <S.WishListTitle>준희네 떡볶이 남가좌동점</S.WishListTitle>
            <S.WishListHeart>❤️</S.WishListHeart>
          </S.WishListDescription>
          <S.WishListStore>
            가게 설명 가게 설명 가게 설명 가게 설명 가게 설명 가게 설명 가게
            설명 가게 설명 가게 설명
          </S.WishListStore>
        </S.WishListContent>
        <S.WishListContent>
          <S.WishListImage></S.WishListImage>
          <S.WishListDescription>
            <S.WishListTitle>준희네 떡볶이 남가좌동점</S.WishListTitle>
            <S.WishListHeart>❤️</S.WishListHeart>
          </S.WishListDescription>
          <S.WishListStore>
            가게 설명 가게 설명 가게 설명 가게 설명 가게 설명 가게 설명 가게
            설명 가게 설명 가게 설명
          </S.WishListStore>
        </S.WishListContent>
      </S.WishListContainer>
    </S.WishCenterContainer>
  );
};

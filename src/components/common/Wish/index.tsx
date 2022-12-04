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
    <>
      <S.DropdownContainer>
        <S.DropdownContent ref={dropdownRef}>
          <S.DropdownButton onClick={(e) => handleDropdown(open)}>
            쨘
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
    </>
  );
};

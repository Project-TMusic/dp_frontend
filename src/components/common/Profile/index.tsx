import React from 'react';
import * as S from './styled';

export const Profile: React.FC = () => {
  return (
    <>
      <S.ProfileHeader />
      <S.ProfilePicture />
      <S.ProfileName>
        <S.InfoRevise>정보 수정</S.InfoRevise>
      </S.ProfileName>
    </>
  );
};

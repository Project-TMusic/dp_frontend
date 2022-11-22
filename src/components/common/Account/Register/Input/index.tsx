import React from 'react';
import * as S from './styled';

export interface RegisterInputType {
  setUserId: any;
  setUserPw: any;
  setUserCheckPw: any;
  setUserNumber: any;
}
export const RegisterInput: React.FC<RegisterInputType> = ({
  setUserId,
  setUserPw,
  setUserCheckPw,
  setUserNumber,
}) => {
  return (
    <>
      <S.RegisterAuthContainer>
        <S.RegisterInput
          type="text"
          placeholder="아이디"
          onChange={(event) => {
            setUserId(event.target.value);
          }}
          required
        />
      </S.RegisterAuthContainer>
      <S.RegisterAuthContainer>
        <S.RegisterInput
          type="password"
          placeholder="비밀번호"
          onChange={(event) => {
            setUserPw(event.target.value);
          }}
          required
        />
      </S.RegisterAuthContainer>
      <S.RegisterAuthContainer>
        <S.RegisterInput
          type="password"
          placeholder="비밀번호 확인"
          onChange={(event) => {
            setUserCheckPw(event.target.value);
          }}
          required
        />
      </S.RegisterAuthContainer>
      <S.RegisterAuthContainer>
        <S.RegisterInput
          type="tel"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          placeholder="전화번호"
          onChange={(event) => {
            setUserNumber(event.target.value);
          }}
          required
        />
      </S.RegisterAuthContainer>
      <S.LoginLink to="/login">
        <S.RegisterButton>가입</S.RegisterButton>
      </S.LoginLink>
    </>
  );
};

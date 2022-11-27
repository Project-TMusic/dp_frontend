import React from 'react';
import * as S from './styled';

export interface RegisterInputType {
  setUserCheckPw: any;
  Check: string;
}
export const RegisterInput: React.FC<RegisterInputType> = ({
  setUserCheckPw,
  Check,
}) => {
  return (
    <>
      <S.RegisterAuthContainer>
        <S.RegisterInput type="text" placeholder="이름" required />
      </S.RegisterAuthContainer>
      <S.RegisterAuthContainer>
        <S.RegisterInput type="text" placeholder="아이디" required />
      </S.RegisterAuthContainer>
      <S.RegisterAuthContainer>
        <S.RegisterInput type="password" placeholder="비밀번호" required />
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
      <div style={{ color: Check === '땡' ? 'red' : 'green' }}>{Check}</div>
      <S.RegisterAuthContainer>
        <S.RegisterInput
          type="tel"
          pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}"
          placeholder="전화번호"
          required
        />
      </S.RegisterAuthContainer>
      <S.RegisterButton>가입</S.RegisterButton>
    </>
  );
};

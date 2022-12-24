import styled from '@emotion/styled';

export const Header = styled.div<{ ScrollBoolean: boolean }>`
  padding: 30px;
  background-color: lime;
  display: flex;
  justify-content: center;
  top: ${(props) => (props.ScrollBoolean ? 0 : '-90px')};
  position: fixed;
  width: 100%;
  transition: top 0.4s ease-out;
`;

export const asd = styled.div`
  padding-top: 50rem;
`;

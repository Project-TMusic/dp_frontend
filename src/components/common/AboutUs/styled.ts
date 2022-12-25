import styled from '@emotion/styled';

export const AboutUsContainer = styled.div`
  width: 100%;
  margin-top: 5rem;
`;

export const Title = styled.div`
  text-align: center;
  font-size: 9rem;
  font-weight: bold;
  &.animation {
    animation-name: opacity;
    animation-duration: 1000ms;

    @keyframes opacity {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

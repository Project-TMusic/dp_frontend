import styled from '@emotion/styled';
import Slider from 'react-slick';
export const AboutCards = styled(Slider)`
  margin-bottom: 13rem;
  margin-top: 4rem;

  .slick-track {
    height: 32rem;
  }
  .slick-list {
    margin: auto;
    width: 100%;
    display: block;
    overflow: hidden;
  }
  .slick-slide {
    width: 37rem;
    margin-right: 2rem;
    margin-left: 2rem;
  }
  .slick-dots {
    margin-bottom: -2rem;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #4c51ff;
  }
`;

export const AboutCardElement = styled.div`
  background: #fff;
  width: 41.2rem;
  height: 28.7rem;
  border: 1px solid #f3f3f3;
  border-radius: 3rem;
  box-shadow: 1px 3px 6px #00000029;
`;

export const AboutCardContainer = styled.div`
  width: 100%;
  height: 50rem;
`;

export const ContainerInAboutCardElement = styled.div``;
export const AboutCardElementText = styled.div`
  width: 100%;
  text-align: center;
  font-size: 2.8rem;
  font-weight: bold;
`;

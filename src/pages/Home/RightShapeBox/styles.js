import styled, { keyframes } from 'styled-components'

export const OpacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const SecondShapeAnimation = keyframes`
  0% {
    top: 0px;
    left: 0px;
    transform: rotate(0deg);
  }
  60% {
    top: 0px;
    left: 0px;
    transform: rotate(0deg);
  }
  100% {
    top: 78px;
    left: 15px;
    transform: rotate(-21.37deg);
  }
`

export const Box = styled.div`
  position: absolute;
  top: 88px;
  left: 75vw;
  width: 530px;
  height: 956px;
  animation: ${OpacityAnimation} 1.5s ease-in-out;

  @media (max-width: 2368px) { left: 77vw; }
  @media (max-width: 2200px) { left: 80vw; }
  @media (max-width: 1960px) { left: 84vw; }
  @media (max-width: 1728px) { left: 88vw; }
  @media (max-width: 1564px) { left: 92vw; }
  @media (max-width: 1450px) { left: 95vw; }
  @media (max-width: 1365px) { left: 97vw; }
  @media (max-width: 1265px) { display: none; }
`

export const SecondShape = styled.div`
  position: absolute;
  top: 78px;
  left: 15px;
  z-index: 1;
  width: 383.5px;
  height: 766.99px;
  background-image: url('/assets/svg/dark-shape.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotate(-21.37deg);
  animation: ${SecondShapeAnimation} 1s ease-in-out;
  animation-delay: .5s;
`

export const ThirdShape = styled.div`
  width: 382px;
  height: 763px;
  background-image: url('/assets/svg/light-shape.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

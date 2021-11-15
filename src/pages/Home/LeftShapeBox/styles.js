import styled, { keyframes } from 'styled-components'

export const OpacityAnimation = keyframes`
  0% {
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
    top: 110px;
    left: -47px;
    transform: rotate(-21.37deg);
  }
`

export const SecondShapeAnimationMobile = keyframes`
  0% {
    top: 0px;
    right: 24px;
    transform: rotate(0deg);
  }
  60% {
    top: 0px;
    right: 24px;
    transform: rotate(0deg);
  }
  100% {
    top: 20vw;
    right: 14.3vw;
    transform: rotate(-21.37deg);
  }
`

export const ThirdShapeAnimation = keyframes`
  0% {
    top: 0px;
    left: 0px;
  }
  40% {
    top: 0px;
    left: 0px;
  }
  100% {
    top: 34px;
    left: -62px;
  }
`

export const ThirdShapeAnimationMobile = keyframes`
  0% {
    top: 0px;
    right: 24px;
  }
  60% {
    top: 0px;
    right: 24px;
  }
  100% {
    top: 7vw;
    right: 18vw;
  }
`

export const Box = styled.div`
  position: relative;
  margin-top: 115px;
  width: 677.96px;
  height: 923px;
  animation: ${OpacityAnimation} 1s ease-in-out;

  @media (max-width: 1200px) {
    order: 2;
    margin-top: 60px;
    width: 100%;
    height: 150vw;
    padding: 0px 24px;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
  }
`

export const YellowShape = styled.div`
  position: absolute;
  top: 471px;
  left: 275px;
  z-index: 4;
  width: 193px;
  height: 193px;
  background-image: url(/assets/svg/yellow-shape.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${OpacityAnimation} 1.4s ease-in-out;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const CirclesShape = styled.div`
  position: absolute;
  top: 536px;
  left: 438px;
  z-index: 3;
  width: 67.96px;
  height: 34px;
  background-image: url(/assets/svg/circles-shape.svg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${OpacityAnimation} 1s ease-in-out;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const FirstShape = styled.div`
  position: relative;
  z-index: 2;
  width: 384px;
  height: 767px;
  background-image: url(/assets/png/best-teacher.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 1200px) {
    width: 69vw;
    height: 138vw;
  }
`

export const SecondShape = styled.div`
  position: absolute;
  top: 110px;
  left: -47px;
  z-index: 1;
  width: 383.5px;
  height: 766.99px;
  background-image: url('/assets/svg/dark-shape.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  transform: rotate(-21.37deg);
  animation: ${SecondShapeAnimation} 1s ease-in-out;

  @media (max-width: 1200px) {
    top: 20vw;
    left: unset;
    right: 14.3vw;
    width: 69vw;
    height: 138vw;
    animation: ${SecondShapeAnimationMobile} 1s ease-in-out;
  }
`

export const ThirdShape = styled.div`
  position: absolute;
  top: 34px;
  left: -62px;
  z-index: 0;
  width: 382px;
  height: 763px;
  background-image: url('/assets/svg/light-shape.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  animation: ${ThirdShapeAnimation} 1s ease-in-out;

  @media (max-width: 1200px) {
    top: 7vw;
    left: unset;
    right: 18vw;
    width: 68vw;
    height: 137vw;
    animation: ${ThirdShapeAnimationMobile} 1s ease-in-out;
  }
`

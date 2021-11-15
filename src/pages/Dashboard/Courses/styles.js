import styled, { keyframes } from 'styled-components'

export const LoadingDot = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap;
`

export const Col = styled.div`
  width: 31.3%;

  @media (max-width: 991px) {
    width: 48%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`

export const Paginate = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0px;
`

export const Button = styled.div`
  width: fit-content;
`

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadingItem = styled.div`
  width: 14px;
  height: 14px;
  background-color: #7A57FD;
  border-radius: 50%;
  margin: 5.6px;

  animation: ${LoadingDot} .5s ease-in-out infinite;
  animation-delay: .1s;
  
  &:first-child {
    animation: ${LoadingDot} .5s ease-in-out infinite;
    animation-delay: 0s;
  }
  
  &:last-child {
    animation: ${LoadingDot} .5s ease-in-out infinite;
    animation-delay: .2s;
  }
`

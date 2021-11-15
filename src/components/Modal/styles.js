import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  z-index: 6;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(32, 14, 100, .8);
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: ${props => props.active ? 'unset' : 'none'};
  opacity: ${props => props.active ? '1' : '0'};
  transition: opacity .3s ease-in-out;
`

export const Modal = styled.div`
  position: relative;
  width: 525px;
  min-height: 400px;
  background-color: #6A40E4;
  border-radius: 4px;
  padding: 40px;

  @media (max-width: 767px) {
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    width: unset;
    min-height: unset;
    padding: 24px;
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: -25px;
  right: -25px;
  width: 51px;
  height: 51px;
  background-color: #200E64;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 23px;
    height: 23px;
    top: 29px;
    right: 24px;
    background-color: transparent;
  }
`

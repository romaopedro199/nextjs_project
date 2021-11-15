import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const OpenMenu = styled(Flex)`
  padding-right: 18px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Menu = styled(Flex)`
  width: 100%;
  justify-content: space-between;

  @media (max-width: 767px) {
    position: fixed;
    z-index: 5;
    top: 0px;
    left: ${props => props.show ? '0px' : '-100%'};
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    padding: 24px;
    background-color: #200E64;
    transition: all .15s ease-in-out;
  }
`

export const MenuLogo = styled.div`
  position: absolute;
  top: 30px;
  left: 28px;

  @media (min-width: 768px) {
    display: none;
  }
`

export const CloseMenu = styled(Flex)`
  position: absolute;
  top: 27px;
  right: 28px;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Links = styled(Flex)`
  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
  }
`

export const Link = styled.a`
  padding: 0px 23.5px;
  font-family: Open Sans;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  text-decoration: none;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  transition: all .15s ease-in-out;

  @media (min-width: 768px) {
    &:first-child {
      margin-left: 79.72px;
    }
  }

  @media (max-width: 768px) {
    font-size: 21px;
    padding: 15px 0px;

    &:last-child {
      margin-bottom: 59px;
    }
  }

  &:hover {
    color: #FFD74F;
  }
`

export const Button = styled.div`
  width: 165px;

  @media (max-width: 767px) {
    width: 100%;
  }
`

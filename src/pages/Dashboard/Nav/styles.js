import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const FlexBetween = styled(Flex)`
  justify-content: space-between;
  width: 100%;
`

export const Dots = styled.div`
  position: absolute;
  top: 0px;
  left: -90px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const Link = styled.a`
  margin-left: 48px;
  padding: 0px 23.5px;
  font-family: Open Sans;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  text-decoration: none;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  transition: all .15s ease-in-out;

  @media (max-width: 768px) {
    display: none;
  }

  &:hover {
    color: #FFD74F;
  }
`

export const Button = styled.div`
  width: 186px;
  margin-right: 28px;

  @media (max-width: 768px) {
    display: none;
  }
`

export const User = styled(Flex)`
  position: relative;
  width: 34px;
  height: 34px;
  border-radius: 50%;
`

export const Arrow = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-right: 4px;
  transform: rotate(${props => props.active ? '180' : '0'}deg);
  transition: all .15s ease-in-out;

  @media (min-width: 768px) {
    display: none;
  }
`

export const Notification = styled.div`
  position: absolute;
  top: -4px;
  right: 0px;
  width: 9.6px;
  height: 9.6px;
  background-color: #FFD74F;
  border-radius: 50%;
`

export const MobileMenu = styled.div`
  position: fixed;
  z-index: 1;
  top: ${props => props.show ? '64px' : '-100vh'};
  width: 100%;
  height: calc(100vh - 64px);
  background-color: rgba(255, 255, 255, .8);
  transition: all .15s ease-in-out;

  @media (min-width: 768px) {
    top: -100vh;
  }
`

export const Item = styled(FlexBetween)`
  padding: 20px 28px;
  background-color: #FFFFFF;
  box-shadow: 0px 32px 60px rgba(84, 95, 122, 0.08);
  font-family: Open Sans;
  font-weight: 700;
  font-size: 11px;
  line-height: 15px;
  letter-spacing: -0.02em;
  color: #7A57FD;
  cursor: pointer;
`

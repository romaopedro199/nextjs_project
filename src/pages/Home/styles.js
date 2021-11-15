import styled from 'styled-components'

export const MainContainer = styled.div`
  overflow-x: hidden;
  position: relative;
  min-height: 100vh;
  background: linear-gradient(180deg, #7A57FD 0%, #6135D7 100%);
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
`

export const Row = styled.div`
  display: flex;
  width: 100%;

  @media (min-width: 1201px) {
    max-width: 1167px;
  }

  @media (max-width: 1200px) {
    flex-direction: column;
    overflow-x: hidden;
  }
`

export const Footer = styled.footer`
  margin-top: -300px;
  height: 302px;
  background-color: #200E64;

  @media (max-width: 767px) {
    height: 98px;
    margin-top: -96px;
  }
`

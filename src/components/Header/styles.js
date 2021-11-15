import styled from 'styled-components'

export const MainContainer = styled.header`
  position: ${props => props.fixed ? 'fixed' : 'relative'};
  z-index: 3;
  top: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: ${props => props.thin ? '15px' : '28px'} 28px;
  background: ${props => props.transparent ? 'rgba(0, 0, 0, 0)' : '#7A57FD'};
`

export const Actions = styled.div`
  position: relative;
  width: 100%;
  max-width: 1167px;
`

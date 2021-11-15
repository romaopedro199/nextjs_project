import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #F1F5F7;
  min-height: calc(100vh - 66px);
  margin-top: 66px;
  display: flex;
  justify-content: center;
  padding: 30px;

  @media (max-width: 767px) {
    margin-top: 64px;
    min-height: calc(100vh - 64px);
    padding: 30px 24px;
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 1167px;
`

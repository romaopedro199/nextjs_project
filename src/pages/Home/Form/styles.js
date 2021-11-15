import styled from 'styled-components'

export const Container = styled.div`
  width: 601px;
  margin-top: 102px;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0px 24px;
  }

  @media (max-width: 500px) {
    margin-top: 32px;
  }
`

export const Title = styled.h1`
  width: 604px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 48px;
  line-height: 57px;
  letter-spacing: -0.06em;
  color: #FFFFFF;

  strong {
    display: block;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: #ffeaa4;
  }

  @media (max-width: 1200px) {
    margin-bottom: 60px;
  }

  @media (max-width: 400px) {
    font-size: 28px;
    line-height: 33px;
  }
`

export const Description = styled.p`
  max-width: 496px;
  margin: 60px 0px;
  font-family: Open Sans;
  font-size: 16px;
  line-height: 31px;
  color: #FFFFFF;

  @media (max-width: 1200px) {
    display: none;
  }
`

export const Flex = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 767px) {
    width: 100%;
    justify-content: space-between;
  }
`

export const Row = styled(Flex)`
  justify-content: space-between;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const CheckContainer = styled.div`
  width: 162px;
  margin-top: 30px;

  @media (min-width: 768px) {
    &:first-child {
      margin-right: 10px;
    }

    &:not(:first-child) {
      margin-left: 10px;
    }
  }

  @media (max-width: 767px) {
    width: 49%;
    margin-top: 16px;
  }
`

export const ButtonContainer = styled.div`
  width: 209px;
  margin-top: 30px;

  @media (max-width: 767px) {
    width: 100%;
    margin-top: 16px;
  }
`

import styled from 'styled-components'

export const Title = styled.h3`
  margin-bottom: 48px;
  width: 604px;
  font-family: Poppins;
  font-weight: 400;
  font-size: 34px;
  line-height: 40px;
  letter-spacing: -0.06em;
  color: #FFFFFF;

  @media (max-width: 767px) {
    font-size: 28px;
    line-height: 33px;
  }

  strong {
    display: block;
    font-size: 38px;
    font-weight: 700;
    line-height: 45px;
    letter-spacing: -0.02em;
    color: #ffeaa4;

    @media (max-width: 767px) {
      font-size: 32px;
      line-height: 37px;
    }
  }
`

export const Space = styled.div`
  height: 16px;
`

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
`

export const ButtonContainer = styled.div`
  margin-top: 27px;
  width: 133px;

  @media (max-width: 767px) {
    width: 100%;
  }
`

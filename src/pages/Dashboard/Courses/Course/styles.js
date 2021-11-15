import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const FlexBetween = styled(Flex)`
  justify-content: space-between;
`

export const Card = styled.div`
  margin-bottom: 30px;
  padding: 12px 13px 27px;
  background-color: #FFFFFF;
  box-shadow: 0px 32px 60px rgba(84, 95, 122, 0.08);
  border-radius: 4px;
  cursor: pointer;
`

export const Image = styled.div`
  margin-bottom: 14px;

  @media (max-width: 767px) {
    margin-bottom: 10px;
  }
`

export const Title = styled.h4`
  margin-top: 16px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  color: #200E64;

  @media (max-width: 767px) {
    margin-top: 21px;
    font-size: 16px;
    line-height: 22px;
  }
`

export const Button = styled.div`
  width: fit-content;

  @media (max-width: 767px) {
    button {
      padding-top: 7px;
      padding-bottom: 7px;
    }
  }
`

export const Star = styled.div`
  width: 23px;
  margin-right: 5px;

  @media (max-width: 767px) {
    width: 17.38px;
    margin-right: 3.78px;
  }
`

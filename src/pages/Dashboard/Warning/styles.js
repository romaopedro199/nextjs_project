import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const Warning = styled(Flex)`
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  justify-content: space-between;
  padding: 42px 116px 19px;
  background-color: #FFFFFF;
  border-radius: 4px;

  @media (max-width: 767px) {
    margin-bottom: 20px;
    padding: 32px 21px 56px;
  }
`

export const Shape = styled.div`
  position: absolute;
  top: 34px;
  left: -37px;
  width: 126px;
  height: 150px;
  background-image: url('/assets/svg/warning-shape.svg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media (max-width: 767px) {
    top: -11px;
    left: unset;
    right: 18px;
    width: 64px;
    height: 80px;
  }
`

export const Title = styled.h3`
  font-family: Poppins;
  font-weight: 400;
  font-size: 21px;
  line-height: 33.6px;
  color: #200E64;
  margin-bottom: 20px;

  strong {
    font-weight: 700;

    span {
      color: #ffeaa4;
    }
  }
`

export const Description = styled.p`
  font-family: Open Sans;
  font-size: 14px;
  line-height: 22px;
  color: #343434;
  max-width: 450px;
`

export const Illustration = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`

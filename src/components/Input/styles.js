import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
`

export const Label = styled.label`
  font-family: Open Sans;
  font-size: 16px;
  line-height: 31px;
  color: #FFFFFF;
  margin-bottom: 5px;

  @media (max-width: 767px) {
    font-size: 14px;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 13px 28px 13px 16px;
  background: #7955E8;
  border: 1px solid #A68EEF;
  box-sizing: border-box;
  border-radius: 4px;
  outline: none;

  font-family: Open Sans;
  font-size: 16px;
  line-height: 31px;
  color: #FFFFFF;

  ::-webkit-input-placeholder {
    color: #FFFFFF;
  }

  :-ms-input-placeholder {
    color: #FFFFFF;
  }

  ::placeholder {
    color: #FFFFFF;
  }

  @media (max-width: 767px) {
    padding: 11px 22px;
  }
`

export const RevealPassword = styled.div`
  position: absolute;
  bottom: 12px;
  right: ${props => props.forceText ? '17.4px' : '18px'};
  cursor: pointer;
`

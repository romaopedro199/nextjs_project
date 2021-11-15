import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  align-items: center;
`

export const Checkbox = styled(Flex)`
  padding: 15px 13px;
  background: ${props => props.checked ? '#7955E8' : 'rgba(121, 85, 232, 0.3)'};
  border: 1px solid ${props => props.checked ? '#A68EEF' : 'rgba(121, 85, 232, 0.3)'};
  border-radius: 4px;
  cursor: pointer;
  transition: all .15s ease-in-out;

  &:hover {
  border-color: #A68EEF;
  }
`

export const Circle = styled(Flex)`
  width: 18px;
  height: 18px;
  padding-top: 1px;
  margin-right: 13px;
  justify-content: center;
  background-color: ${props => props.checked ? '#FFD74F' : 'rgba(255, 255, 255, .2)'};
  border-radius: 50%;
`

export const Check = styled(Flex)`
  opacity: ${props => props.checked ? '1' : '0'};
`

export const Label = styled.span`
  display: block;
  font-family: Open Sans;
  font-weight: 700;
  font-size: 14px;
  line-height: 27px;
  color: #FFFFFF;

  @media (max-width: 767px) {
    font-size: 10px;
  }
`

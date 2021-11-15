import styled, { css } from 'styled-components'

export const Button = styled.button`
  width: 100%;
  height: ${props => props.extraLarge ? '56px' : 'unset'};
  padding: ${props => props.large ? '15px 44px' : '10px 12.74px'};
  background-color: ${props => props.primary ? '#FFD74F' : props.secondary ? 'rgba(32, 14, 100, .3)' : 'rgba(207, 201, 233, .4)'};
  border-width: 0px;
  border-radius: 4px;
  cursor: pointer;
  transition: all .15s ease-in-out;

  ${props => {
    if (props.primary) {
      return css`
        &:hover {
          box-shadow: 1px 3px 11px -3px rgba(255, 231, 150, 0.45);
        }
      `
    }
  }}

  font-family: Open Sans;
  font-weight: ${props => props.large ? '700' : '600'};
  font-size: ${props => props.large ? '14px' : '11px'};
  line-height: ${props => props.large ? '19px' : '16px'};
  letter-spacing: ${props => props.large ? '-0.02em' : '-0.01em'};
  color: ${props => props.primary ? '#6F48EC' : props.secondary ? '#FFFFFF' : 'rgba(0, 0, 0, .8)'};
`

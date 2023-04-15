import styled from 'styled-components'

interface IButtonContainerProps {
  selected: boolean
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  background-color: ${({ theme, selected }) =>
    selected ? theme.primary : theme.gray200};
  min-width: 150px;
  border: none;
  height: 45px;
  border-radius: 4px 4px 0px 0px;
`

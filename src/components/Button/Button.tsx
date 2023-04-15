import { ButtonContainer } from './Button.Styles'

interface IButton {
  selected?: boolean
  children: string
}

export function Button({ selected = true, children }: IButton) {
  return <ButtonContainer selected={selected}>{children}</ButtonContainer>
}

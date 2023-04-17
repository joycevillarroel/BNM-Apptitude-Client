import { ButtonContainer } from './Button.styles'

interface IButton {
  selected?: boolean
  onClick: () => void
  children: string
}

export function Button({ selected = true, children, onClick }: IButton) {
  return (
    <ButtonContainer selected={selected} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

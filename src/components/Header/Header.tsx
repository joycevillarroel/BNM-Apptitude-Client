import { HeaderContainer, HeaderContent } from './Header.styles'
import BNMLogo from '../../assets/images/BNM_Logo_White.png'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent src={BNMLogo} />
    </HeaderContainer>
  )
}

import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header/Header'
import { LayoutContainer, LayoutContent } from './DefaultLayout.styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <LayoutContent>
        <Outlet />
      </LayoutContent>
    </LayoutContainer>
  )
}

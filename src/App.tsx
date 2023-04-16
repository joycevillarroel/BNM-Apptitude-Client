import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import InicializarStore from './infrastructure/state-management/initialize-store'

function AppWrapper() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export const App = () => {
  const store = InicializarStore()
  return (
    <Provider store={store}>
      <AppWrapper />
    </Provider>
  )
}

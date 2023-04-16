import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Provider } from 'react-redux'
import InicializarStore from './infrastructure/state-management/initialize-store'

function AppWrapper() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>BNM Apptitude</h1>
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

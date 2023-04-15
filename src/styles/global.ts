import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.white};
  }
  body, input, textarea, button {
    color: ${({ theme }) => theme.white};
    font-family: 'Montserrat', sans-serif;
    font-size: 1rem;
    font-weight: 400;
  }
`

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../app/styles/global'
import theme from '../app/styles/theme'

export const Wrapper = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </>
  )
}

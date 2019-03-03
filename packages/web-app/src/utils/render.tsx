import React from 'react'
import { render } from 'react-testing-library'
import { ThemeProvider } from './styled'
import theme from '../themes/theme-a'

export default <E extends React.ReactElement, O>(ui: E, options?: O) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, options)

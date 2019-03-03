import * as styledComponents from 'styled-components'
import { Color } from 'csstype'

export interface Theme {
  colors: {
    primary: Color
  }
}

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>

export { css, createGlobalStyle, keyframes, ThemeProvider }
export default styled

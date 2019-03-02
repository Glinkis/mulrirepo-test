import React, { FC } from 'react'
import { Global, css } from '@emotion/core'

const style = css`
  body {
    font-family: sans-serif;
    background-color: #eaeaea;
  }

  * {
    margin: 0;
    padding: 0;
  }
`

const Layout: FC = ({ children }) => (
  <>
    <Global styles={style} />
    {children}
  </>
)

export default Layout

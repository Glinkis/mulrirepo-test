import React, { FC } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const style = css`
  background: rebeccapurple;

  > h1 {
    padding: 1.5rem;

    > a {
      color: white;
      text-decoration: none;
    }
  }
`

const Header: FC = ({ children }) => (
  <header css={style}>
    <h1>
      <Link to="/">{children}</Link>
    </h1>
  </header>
)

export default Header

import React, { FC } from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

const style = css`
  background: rebeccapurple;
  marginbottom: 1.45rem;

  > div {
    margin: 0 auto;
    max-width: 960;
    padding: 1.45rem 1.0875rem;

    > h1 {
      margin: 0;
      color: white;
      text-decoration: none;
    }
  }
`

const Header: FC = ({ children }) => (
  <header css={style}>
    <div>
      <h1>
        <Link to="/">{children}</Link>
      </h1>
    </div>
  </header>
)

export default Header

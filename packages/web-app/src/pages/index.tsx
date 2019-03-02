import React from 'react'
import { css } from '@emotion/core'

const style = css`
  margin: 0;
  padding: 1em;
  font-family: sans-serif;
  color: hotpink;
  background: black;
`

const IndexPage = () => {
  return <h1 css={style}>Hi people</h1>
}

export default IndexPage

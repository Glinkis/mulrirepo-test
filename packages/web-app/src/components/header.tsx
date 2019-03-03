import React from 'react'
import { Link } from 'gatsby'
import styled from '../utils/styled'

const Header = styled.header`
  background: ${props => props.theme.colors.primary};
  transition: all 500ms;

  > h1 {
    padding: 1.5rem;

    > a {
      color: white;
      text-decoration: none;
    }
  }
`

interface Props {
  children?: React.ReactNode
}

export default ({ children }: Props) => (
  <Header>
    <h1>
      <Link to="/">{children}</Link>
    </h1>
  </Header>
)

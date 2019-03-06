import React from 'react'
import styled from '../utils/styled'

interface Props {
  children?: React.ReactNode
}

const Wrapper = styled.header`
  background: ${props => props.theme.colors.primary};
  transition: all 500ms;
`

const Title = styled.h1`
  color: white;
  padding: 1.5rem;
`

const Header = ({ children }: Props) => (
  <Wrapper>
    <Title>{children}</Title>
  </Wrapper>
)

export default Header

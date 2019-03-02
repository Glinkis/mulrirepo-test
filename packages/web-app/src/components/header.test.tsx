import React from 'react'
import { render } from 'react-testing-library'

import Header from './header'

describe('Header', () => {
  it('renders title', () => {
    const text = 'Hello World'
    const result = render(<Header>{text}</Header>)
    expect(result.getByText(text)).toBeTruthy()
  })
})

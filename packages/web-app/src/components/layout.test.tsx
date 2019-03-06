import React from 'react'
import render from '../utils/render'
import Layout from './layout'

describe('Layout', () => {
  it('renders layout', () => {
    const text = 'Hello World'
    const result = render(<Layout>{text}</Layout>)
    expect(result.getByText(text)).toBeTruthy()
  })
})

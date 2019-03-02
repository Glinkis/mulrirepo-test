declare namespace jest {
  interface Matchers<R> {
    toHaveTextContent: (htmlElement: string) => object
    toBeInTheDocument: () => void
  }

  interface Expect {
    toHaveTextContent: (htmlElement: string) => object
    toBeInTheDocument: () => void
  }
}

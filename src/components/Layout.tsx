import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

const Layout = pageContext => {
  const { children } = pageContext
  return <ChakraProvider>{children}</ChakraProvider>
}

export default Layout

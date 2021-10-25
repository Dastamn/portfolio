import { ChakraProvider } from '@chakra-ui/react';
import { PageProps } from 'gatsby';
import React from 'react';

const Layout = (pageProps: PageProps) => {
  const { children } = pageProps;
  return <ChakraProvider>{children}</ChakraProvider>;
};

export default Layout;

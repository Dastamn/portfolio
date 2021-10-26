import { PageProps } from 'gatsby';
import React from 'react';

const Layout = (pageProps: PageProps) => {
  const { children } = pageProps;
  return <div>{children}</div>;
};

export default Layout;

import React from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@chakra-ui/core';

import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div id="lechehouse-content">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap"
        />
      </Helmet>
      <Box maxWidth="full" margin="136px auto 0 auto" padding="0 24px">
        {children}
      </Box>
      <Header />
    </div>
  );
};

export default Layout;

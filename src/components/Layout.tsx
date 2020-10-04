import React from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@chakra-ui/core';

import Header from './Header';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box id="lechehouse-content">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap"
        />
        <title>Lechehouse Music | Home</title>
      </Helmet>

      <Box
        maxWidth="full"
        margin={{ base: '92px auto 0 auto', lg: '136px auto 0 auto' }}
        padding="0 24px"
      >
        {children}
      </Box>
      <Header />
    </Box>
  );
};

export default Layout;

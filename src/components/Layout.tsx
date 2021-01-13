import React from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@chakra-ui/core';

import Header from './Header';
import SocialIcons from './SocialIcons';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box id="lechehouse-content" overflow="hidden" height="100vh">
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kumbh+Sans&display=swap"
        />
        <title>Lechehouse Music | Home</title>
      </Helmet>

      <Box
        id="lechehouse-scroll"
        margin={{ base: '93px auto 0 auto', lg: '152px auto 0 auto' }}
        padding="0 24px"
        overflow="auto"
        height="calc(100vh - 92px)"
        minHeight="-webkit-fill-available"
        style={{ scrollSnapType: 'y mandatory' }}
      >
        <Box maxWidth="full" margin="0 auto">
          {children}
        </Box>
        <SocialIcons />
      </Box>
      <Header />
    </Box>
  );
};

export default Layout;

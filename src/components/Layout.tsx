import React from 'react';
import { Helmet } from 'react-helmet';
import { Box } from '@chakra-ui/core';
import { use100vh } from 'react-div-100vh';

import useMediaQuery from '../hooks/useMediaQuery';
import Header from './Header';
import SocialIcons from './SocialIcons';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const height = use100vh();
  const isSmallScreenWidth = useMediaQuery('(max-width: 768px)');
  const offset = isSmallScreenWidth ? 93 : 152;
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
        id="lechehouse-scroll"
        margin={{ base: '93px auto 0 auto', lg: '152px auto 0 auto' }}
        padding="0 24px"
        overflow="auto"
        height={`calc(${height}px - ${offset}px)`}
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

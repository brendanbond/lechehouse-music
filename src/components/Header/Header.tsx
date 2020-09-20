import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/core';

import Brand from '../Brand';
import MaskingTape from '../../assets/images/header_masking_tape.png';

const MenuItems = ({ children }: { children: React.ReactNode }) => (
  <Heading fontSize="xl" mt={{ base: 4, lg: 0 }} display="block" opacity={0.85}>
    {children}
  </Heading>
);

const Header = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box
      bgImage="linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,228,189,1) 100%)"
      boxShadow="0px 4px 14px 0px rgba(0, 0, 0, 0.3);"
      width="100%"
      position="fixed"
      top="0"
      left="0"
    >
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="16px 24px"
        maxWidth="full"
        margin="auto"
      >
        <Flex align="center">
          <Brand />
        </Flex>

        <Box display={{ md: 'block', lg: 'none' }} onClick={handleToggle}>
          <svg
            fill="black"
            width="32px"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </Box>

        <Box
          display={{ base: show ? 'block' : 'none', lg: 'flex' }}
          justifyContent="space-between"
          padding={{ base: 0, lg: '60px' }}
          width={{ base: 'full', lg: '740px' }}
          height={{ base: 'auto', lg: '120px' }}
          alignItems="center"
          flexGrow={0}
          backgroundImage={{ base: '', lg: `url(${MaskingTape})` }}
          backgroundRepeat="no-repeat"
        >
          <MenuItems>ABOUT</MenuItems>
          <MenuItems>GEAR</MenuItems>
          <MenuItems>DISCOG</MenuItems>
          <MenuItems>BOOKING</MenuItems>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

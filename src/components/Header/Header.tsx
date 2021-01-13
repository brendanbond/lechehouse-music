import React from 'react';
import { Box, Flex } from '@chakra-ui/core';

import Brand from '../Brand';
import MaskingTape from '../../assets/images/header_masking_tape.png';
import MenuItem from './MenuItem';

const Header = () => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Box
      minHeight={{ base: '93px', lg: '152px' }}
      bgImage="linear-gradient(180deg, rgba(255,255,255,1) 0%, rgb(212,211,210,1) 100%)"
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
          <MenuItem to="about" onMenuItemClick={() => setShow(false)}>
            ABOUT
          </MenuItem>
          <MenuItem to="gear" onMenuItemClick={() => setShow(false)}>
            GEAR
          </MenuItem>
          <MenuItem
            to="https://lechehousemusic.bandcamp.com"
            onMenuItemClick={() => setShow(false)}
            external
          >
            MERCH
          </MenuItem>
          <MenuItem to="videos" onMenuItemClick={() => setShow(false)}>
            VIDEOS
          </MenuItem>
          <MenuItem to="discog" onMenuItemClick={() => setShow(false)}>
            DISCOG
          </MenuItem>
          <MenuItem to="booking" onMenuItemClick={() => setShow(false)}>
            BOOKING
          </MenuItem>
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;

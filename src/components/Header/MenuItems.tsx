import React from 'react';
import { scroller } from 'react-scroll';
import { Heading } from '@chakra-ui/core';

import useMediaQuery from '../../hooks/useMediaQuery';

const MenuItems = ({
  children,
  to,
  onMenuItemClick,
}: {
  children: React.ReactNode;
  to: string;
  onMenuItemClick: () => void;
}) => {
  const isSmallScreenWidth = useMediaQuery('(max-width: 768px)');
  const offset = isSmallScreenWidth ? -92 : -136;
  console.log('[offset]', offset);
  const handleClick = () => {
    onMenuItemClick();
    scroller.scrollTo(to, {
      duration: 1500,
      delay: 100,
      smooth: true,
      offset,
    });
  };

  return (
    <Heading
      userSelect="none"
      cursor="pointer"
      fontSize="xl"
      mt={{ base: 4, lg: 0 }}
      display="block"
      opacity={0.85}
      onClick={handleClick}
    >
      {children}
    </Heading>
  );
};

export default MenuItems;

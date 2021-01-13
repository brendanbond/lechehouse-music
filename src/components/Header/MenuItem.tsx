import React from 'react';
import { scroller } from 'react-scroll';
import { Heading } from '@chakra-ui/core';

import useMediaQuery from '../../hooks/useMediaQuery';

const MenuItem = ({
  children,
  to,
  onMenuItemClick,
  external = false,
}: {
  children: React.ReactNode;
  to: string;
  onMenuItemClick: () => void;
  external?: boolean;
}) => {
  const isSmallScreenWidth = useMediaQuery('(max-width: 768px)');
  const offset = isSmallScreenWidth ? -93 : -152;
  const handleClick = () => {
    onMenuItemClick();
    if (external) {
      return;
    }
    scroller.scrollTo(to, {
      duration: 1500,
      delay: 100,
      smooth: false,
      containerId: 'lechehouse-scroll',
      offset,
    });
  };

  return (
    <Heading
      userSelect="none"
      cursor="pointer"
      fontSize="2xl"
      mt={{ base: 4, lg: 0 }}
      display="block"
      opacity={0.85}
      onClick={handleClick}
    >
      {external ? (
        <a href={to} target="_blank" rel="noreferrer">
          {children}
        </a>
      ) : (
        children
      )}
    </Heading>
  );
};

export default MenuItem;

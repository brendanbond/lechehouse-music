import React from 'react';
import { Box } from '@chakra-ui/core';

const VerticalDivider = ({
  height,
  color,
  width,
}: {
  height:
    | string
    | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
      };
  color: string;
  width: string;
}) => (
  <Box
    as="span"
    margin="0 30px"
    borderColor={color}
    height={height}
    borderWidth={width}
    borderRadius="2px"
    display={{ base: 'none', lg: 'inline-block' }}
  />
);

export default VerticalDivider;

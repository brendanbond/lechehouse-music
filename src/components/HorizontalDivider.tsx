import React from 'react';
import { Box } from '@chakra-ui/core';

const HorizontalDivider = ({
  width,
  color,
  height,
}: {
  height:
    | string
    | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
      };
  color: string;
  width:
    | string
    | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
      };
}) => (
  <Box
    as="div"
    margin="20px 0"
    borderColor={color}
    width={width}
    borderWidth={height}
    borderRadius="2px"
    display={{ base: 'block', lg: 'none' }}
  />
);

export default HorizontalDivider;

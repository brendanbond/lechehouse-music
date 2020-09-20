import React from 'react';
import { Box } from '@chakra-ui/core';

const VerticalDivider = ({
  height,
  color,
  width,
}: {
  height: string;
  color: string;
  width: string;
}) => (
  <Box
    as="span"
    display="inline-block"
    margin="0 30px"
    borderColor={color}
    height={height}
    borderWidth={width}
    borderRadius="2px"
  />
);

export default VerticalDivider;

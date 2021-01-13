import React from 'react';
import { Box } from '@chakra-ui/core';

import BandcampIcon from '../assets/images/bandcamp-button.png';

const BandcampIconLink = ({ width, to }: { width: string; to: string }) => {
  return (
    <Box mt={{ base: 4, lg: 0 }} opacity={0.85}>
      <a href={to} target="_blank" rel="noreferrer">
        <img src={BandcampIcon} alt="Bandcamp Logo" width={width} />
      </a>
    </Box>
  );
};

export default BandcampIconLink;

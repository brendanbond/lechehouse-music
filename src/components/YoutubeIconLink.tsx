import React from 'react';
import { Box } from '@chakra-ui/core';

import YoutubeIcon from '../assets/images/youtube-button.png';

const YoutubeIconLink = ({ width, to }: { width: string; to: string }) => {
  return (
    <Box mt={{ base: 4, lg: 0 }} opacity={0.85}>
      <a href={to} target="_blank" rel="noreferrer">
        <img src={YoutubeIcon} alt="Youtube Logo" width={width} />
      </a>
    </Box>
  );
};

export default YoutubeIconLink;

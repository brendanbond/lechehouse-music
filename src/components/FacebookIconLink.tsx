import React from 'react';
import { Box } from '@chakra-ui/core';

const FacebookIconLink = ({ width, to }: { width: string; to: string }) => {
  return (
    <Box mt={{ base: 4, lg: 0 }} opacity={0.85}>
      <a href={to} target="_blank" rel="noreferrer">
        <svg
          version="1.1"
          id="Ebene_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 1024 1024"
          width={width}
        >
          <g>
            <path
              d="M1024,512C1024,229.2,794.8,0,512,0S0,229.2,0,512c0,255.6,187.2,467.4,432,505.8V660H302V512h130V399.2
   C432,270.9,508.4,200,625.4,200c56,0,114.6,10,114.6,10v126h-64.6c-63.6,0-83.4,39.5-83.4,80v96h142l-22.7,148H592v357.8
   C836.8,979.4,1024,767.6,1024,512z"
            />
          </g>
        </svg>
      </a>
    </Box>
  );
};

export default FacebookIconLink;

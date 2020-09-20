import React from 'react';
import { Flex, Box } from '@chakra-ui/core';

import RoundedImage from './RoundedImage';
import VerticalDivider from './VerticalDivider';

const SectionContentRegion = ({
  children,
  leftToRight,
  image,
  borderColor,
  borderHeight,
}: {
  children: React.ReactNode;
  leftToRight: boolean;
  image: any; // TODO: change asap
  borderColor: 'betoBlue' | 'betoOrange' | 'betoYellow';
  borderHeight: string;
}) => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={leftToRight ? 'row' : 'row-reverse'}
      height="calc(100vh - 136px)"
    >
      <Flex
        width="50%"
        justifyContent={leftToRight ? 'flex-end' : 'flex-start'}
      >
        <Box width="85%" textAlign="right">
          <RoundedImage fluid={image} />
        </Box>
      </Flex>

      <VerticalDivider height={borderHeight} color={borderColor} width="2px" />

      <Flex
        width="50%"
        justifyContent={leftToRight ? 'flex-start' : 'flex-end'}
      >
        <Box
          width="85%"
          fontSize="1.17rem"
          textAlign={leftToRight ? 'left' : 'right'}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default SectionContentRegion;

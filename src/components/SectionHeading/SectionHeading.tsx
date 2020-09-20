import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Image, { FluidObject } from 'gatsby-image';

import MaskingTape from '../../assets/images/section_header_vertical_masking_tape.png';

const UprightTextBox = styled(Box)`
  writing-mode: vertical-lr;
  text-orientation: upright;
  -webkit-text-orientation: upright;
  letter-spacing: 4px;
`;

const SectionHeading = ({
  image,
  title,
  leftToRight,
}: {
  image: FluidObject;
  title: string;
  leftToRight: boolean;
}) => {
  return (
    <Flex
      alignItems="center"
      height="calc(100vh - 136px)"
      flexDirection={leftToRight ? 'row' : 'row-reverse'}
    >
      <Box
        bgImage={`url(${MaskingTape})`}
        backgroundRepeat="no-repeat"
        width="85px"
        height="300px"
        position="relative"
        margin={leftToRight ? '0 30px 0 0' : '0 0 0 30px'}
      >
        <UprightTextBox position="absolute" top="20%" left="15%" opacity={0.8}>
          <Heading lineHeight={1.5}>{title}</Heading>
        </UprightTextBox>
      </Box>
      <Box width="100%" maxHeight="100%" height="400px">
        <Image
          fluid={image}
          style={{ maxHeight: '100%', borderRadius: '59px' }}
        />
      </Box>
    </Flex>
  );
};

export default SectionHeading;

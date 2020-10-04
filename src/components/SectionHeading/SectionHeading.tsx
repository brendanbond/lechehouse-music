import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Image from 'gatsby-image';

import MaskingTape from '../../assets/images/section_header_vertical_masking_tape.png';
import SnapScrollChild from '../SnapScrollChild';

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
  image: NonNullable<
    NonNullable<GatsbyTypes.HomePageQuery['aboutHeader']>['childImageSharp']
  >['fluid'];
  title: string;
  leftToRight: boolean;
}) => {
  if (!image) return <div />;

  return (
    <SnapScrollChild>
      <Flex
        alignItems="center"
        height={{ base: 'calc(100vh - 92px)', lg: 'calc(100vh - 136px)' }}
        flexDirection={leftToRight ? 'row' : 'row-reverse'}
        display={{ base: 'none', lg: 'flex' }}
      >
        <Box
          bgImage={`url(${MaskingTape})`}
          backgroundRepeat="no-repeat"
          width="85px"
          height="300px"
          position="relative"
          margin={leftToRight ? '0 30px 0 0' : '0 0 0 30px'}
        >
          <UprightTextBox
            position="absolute"
            top="20%"
            left="15%"
            opacity={0.8}
          >
            <Heading fontSize="3xl" lineHeight={1.5}>
              {title}
            </Heading>
          </UprightTextBox>
        </Box>
        <Box width="100%" maxHeight="100%" height="400px">
          <Image
            fluid={image}
            style={{ maxHeight: '100%', borderRadius: '59px' }}
          />
        </Box>
      </Flex>
    </SnapScrollChild>
  );
};

export default SectionHeading;

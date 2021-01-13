import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/core';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { use100vh } from 'react-div-100vh';

import VerticalMaskingTape from '../../assets/images/section_header_vertical_masking_tape.png';
import HorizontalMaskingTape from '../../assets/images/section_header_horizontal_masking_tape.png';
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
  const height = use100vh();
  if (!image) return <div />;

  return (
    <SnapScrollChild>
      <Flex
        alignItems="center"
        height={{
          base: `calc(${height}px - 92px)`,
          lg: `calc(${height}px - 136px)`,
        }}
        flexDirection={{
          base: 'column',
          lg: leftToRight ? 'row' : 'row-reverse',
        }}
        justifyContent="center"
      >
        <Box
          bgImage={`url(${VerticalMaskingTape})`}
          backgroundRepeat="no-repeat"
          width="85px"
          height="300px"
          position="relative"
          margin={leftToRight ? '0 30px 0 0' : '0 0 0 30px'}
          display={{ base: 'none', lg: 'block' }}
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
        <Box
          width="100%"
          maxHeight="100%"
          height={{ base: 'auto', lg: '400px' }}
          position="relative"
        >
          <Image
            fluid={image}
            style={{ maxHeight: '100%', borderRadius: '59px' }}
          />
          <Box
            position="absolute"
            width="300px"
            height="77px"
            top="10px"
            left="10px"
            bgImage={`url(${HorizontalMaskingTape})`}
            backgroundRepeat="no-repeat"
            display={{ base: 'flex', lg: 'none' }}
            justifyContent="center"
            alignItems="center"
          >
            <Heading opacity={0.85}>{title}</Heading>
          </Box>
        </Box>
      </Flex>
    </SnapScrollChild>
  );
};

export default SectionHeading;

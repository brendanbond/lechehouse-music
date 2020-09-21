import React from 'react';
import { Flex, Box } from '@chakra-ui/core';

import RoundedImage from './RoundedImage';
import VerticalDivider from './VerticalDivider';
import HorizontalDivider from './HorizontalDivider';

const SectionContentRegion = ({
  children,
  leftToRight,
  image,
  borderColor,
  borderLength,
}: {
  children: React.ReactNode;
  leftToRight: boolean;
  image: NonNullable<
    NonNullable<GatsbyTypes.AboutQuery['aboutContent']>['childImageSharp']
  >['fluid'];
  borderColor: 'betoBlue' | 'betoOrange' | 'betoYellow';
  borderLength:
    | string
    | {
        [x: string]: string | number | undefined;
        [x: number]: string | number | undefined;
      };
}) => {
  if (!image) throw new Error('Section content region image not found');

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      flexDirection={{
        base: 'column',
        lg: leftToRight ? 'row' : 'row-reverse',
      }}
      height={{ base: 'calc(100vh - 92px)', lg: 'calc(100vh - 136px)' }}
      width="100%"
    >
      <Flex
        width={{ base: '200px', lg: '50%' }}
        justifyContent={leftToRight ? 'flex-end' : 'flex-start'}
      >
        <Box width={{ base: '100%', lg: '85%' }}>
          <RoundedImage fluid={image} />
        </Box>
      </Flex>

      <VerticalDivider height={borderLength} color={borderColor} width="2px" />

      <HorizontalDivider
        width={borderLength}
        color={borderColor}
        height="2px"
      />

      <Flex
        width={{ base: '85%', lg: '50%' }}
        justifyContent={{
          base: 'center',
          lg: leftToRight ? 'flex-start' : 'flex-end',
        }}
      >
        <Box
          width="85%"
          fontSize={{ base: '3.25vw', sm: '2vw', lg: '1.17rem' }}
          textAlign={{ base: 'center', lg: leftToRight ? 'left' : 'right' }}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default SectionContentRegion;

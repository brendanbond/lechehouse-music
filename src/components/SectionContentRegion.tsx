import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import { use100vh } from 'react-div-100vh';

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
  const height = use100vh();

  return (
    <Flex
      justifyContent={{ base: 'flex-start', lg: 'center' }}
      alignItems="center"
      paddingTop={{ base: '40px', lg: 0 }}
      flexDirection={{
        base: 'column',
        lg: leftToRight ? 'row' : 'row-reverse',
      }}
      height={{
        base: `calc(${height}px - 93px)`,
        lg: `calc(${height}px - 152px)`,
      }}
      width="100%"
      style={{ scrollSnapAlign: 'start' }}
    >
      <Flex
        width={{ base: '150px', lg: '50%' }}
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
          fontSize={{ base: '2.75vw', sm: '1.75vw', lg: '1.17rem' }}
          textAlign={{ base: 'center', lg: leftToRight ? 'left' : 'right' }}
        >
          {children}
        </Box>
      </Flex>
    </Flex>
  );
};

export default SectionContentRegion;

import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import { use100vh } from 'react-div-100vh';

import RoundedImage from './RoundedImage';
import VerticalDivider from './VerticalDivider';
import HorizontalDivider from './HorizontalDivider';
import SnapScrollChild from './SnapScrollChild';

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
    <SnapScrollChild>
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={{
          base: 'column',
          lg: leftToRight ? 'row' : 'row-reverse',
        }}
        height={{
          base: `calc(${height}px - 93px)`,
          lg: `calc(${height}px - 152px)`,
        }}
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

        <VerticalDivider
          height={borderLength}
          color={borderColor}
          width="2px"
        />

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
    </SnapScrollChild>
  );
};

export default SectionContentRegion;

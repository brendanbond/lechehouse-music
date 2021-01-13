import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box } from '@chakra-ui/core';
import Image from 'gatsby-image';
import { Fade } from 'react-awesome-reveal';
import { use100vh } from 'react-div-100vh';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper-bundle.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import SnapScrollChild from '../components/SnapScrollChild';
import useMediaQuery from '../hooks/useMediaQuery';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ShadowedImage = styled(Image)`
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.3);
`;

const Discog = () => {
  const discogData = useStaticQuery<GatsbyTypes.DiscogQuery>(graphql`
    query Discog {
      allFile(filter: { relativePath: { regex: "/^discography/discog_/" } }) {
        nodes {
          id
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);
  const height = use100vh();
  const isSmallScreenWidth = useMediaQuery('(max-width: 768px)');

  return (
    <Flex
      width="100%"
      justifyContent={{ base: 'flex-start', lg: 'center' }}
      alignItems="center"
      paddingTop={{ base: '40px', lg: 0 }}
      height={{
        base: `calc(${height}px - 93px)`,
        lg: `calc(${height}px - 152px)`,
      }}
      style={{ scrollSnapAlign: 'start' }}
    >
      <Swiper
        spaceBetween={25}
        slidesPerView={isSmallScreenWidth ? 1 : 2}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        {discogData.allFile.nodes.map((imageNode) => {
          if (!imageNode?.childImageSharp?.fluid)
            throw new Error(`Image query for discog images failed`);
          return (
            <SwiperSlide key={imageNode.id}>
              <Box width="300px" margin="50px auto">
                <ShadowedImage fluid={imageNode?.childImageSharp?.fluid} />
              </Box>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};

export default Discog;

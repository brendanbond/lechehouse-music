import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box } from '@chakra-ui/core';
import Image from 'gatsby-image';
import { Fade } from 'react-awesome-reveal';

import { DiscogQuery } from '../../graphql-types';

const ShadowedImage = styled(Image)`
  box-shadow: 0px 4px 14px 0px rgba(0, 0, 0, 0.3);
`;

const Discog = () => {
  const discogData = useStaticQuery<DiscogQuery>(graphql`
    query Discog {
      allImageSharp(
        filter: { fixed: { originalName: { regex: "/^discog_/" } } }
      ) {
        nodes {
          id
          fixed(width: 150) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);

  return (
    <Flex height="calc(100vh - 136px)" alignItems="center">
      <Flex
        height="80%"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
      >
        <Fade>
          {discogData.allImageSharp.nodes.map((imageNode) => {
            if (!imageNode.fixed)
              throw new Error(`Image query for discog images failed`);
            return (
              <Box key={imageNode.id} margin="10px">
                <ShadowedImage fixed={imageNode.fixed} />
              </Box>
            );
          })}
        </Fade>
      </Flex>
    </Flex>
  );
};

export default Discog;

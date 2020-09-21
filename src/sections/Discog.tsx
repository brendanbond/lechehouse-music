import React from 'react';
import styled from '@emotion/styled';
import { useStaticQuery, graphql } from 'gatsby';
import { Flex, Box } from '@chakra-ui/core';
import Image from 'gatsby-image';
import { Fade } from 'react-awesome-reveal';

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
  return (
    <Fade triggerOnce>
      <Flex
        minHeight="calc(100vh - 136px)"
        alignItems="center"
        justifyContent="center"
        flexWrap="wrap"
        margin="20px 0"
      >
        {discogData.allFile.nodes.map((imageNode) => {
          if (!imageNode?.childImageSharp?.fluid)
            throw new Error(`Image query for discog images failed`);
          console.log(imageNode);
          return (
            <Box
              width={{ base: '65%', md: '35%', lg: '170px' }}
              height="100%"
              key={imageNode.id}
              margin="10px"
            >
              <ShadowedImage fluid={imageNode?.childImageSharp?.fluid} />
            </Box>
          );
        })}
      </Flex>
    </Fade>
  );
};

export default Discog;

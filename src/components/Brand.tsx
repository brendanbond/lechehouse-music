import React from 'react';
import { Box } from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Brand = () => {
  const imageData = useStaticQuery<GatsbyTypes.BrandQuery>(graphql`
    query Brand {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  if (!imageData?.file?.childImageSharp?.fluid)
    throw new Error('Brand fixed prop is undefined or null');
  else
    return (
      <Box width={{ base: '95px', lg: '175px' }}>
        <Image fluid={imageData?.file.childImageSharp?.fluid} />
      </Box>
    );
};

export default Brand;

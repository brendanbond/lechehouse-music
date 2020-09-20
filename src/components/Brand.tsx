import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

const Brand = () => {
  const imageData = useStaticQuery(graphql`
    query Brand {
      imageSharp(fixed: { originalName: { eq: "logo.png" } }) {
        fixed(width: 175) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  `);

  return (
    <div>
      <Image fixed={imageData.imageSharp.fixed} />
    </div>
  );
};

export default Brand;

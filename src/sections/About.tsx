import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Fade } from 'react-awesome-reveal';

import SectionContentRegion from '../components/SectionContentRegion';

const About = () => {
  const aboutData = useStaticQuery(graphql`
    query About {
      site {
        siteMetadata {
          about
        }
      }
      aboutContent: imageSharp(
        fluid: { originalName: { eq: "beto_console.jpg" } }
      ) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `);

  return (
    <Fade>
      <SectionContentRegion
        leftToRight={true}
        image={aboutData?.aboutContent?.fluid}
        borderColor="betoBlue"
        borderHeight="350px"
      >
        {aboutData.site.siteMetadata.about}
      </SectionContentRegion>
    </Fade>
  );
};

export default About;

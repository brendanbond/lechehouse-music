import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Fade } from 'react-awesome-reveal';

import SectionContentRegion from '../components/SectionContentRegion';

const About = () => {
  const aboutData = useStaticQuery<GatsbyTypes.AboutQuery>(graphql`
    query About {
      site {
        siteMetadata {
          about
        }
      }
      aboutContent: file(relativePath: { eq: "beto_console.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const headerImage = aboutData?.aboutContent?.childImageSharp?.fluid;
  if (!headerImage) throw new Error('About section query failed!');

  return (
    <Fade triggerOnce>
      <SectionContentRegion
        leftToRight={true}
        image={headerImage}
        borderColor="betoBlue"
        borderLength={{ base: '200px', lg: '350px' }}
      >
        {aboutData?.site?.siteMetadata?.about}
      </SectionContentRegion>
    </Fade>
  );
};

export default About;

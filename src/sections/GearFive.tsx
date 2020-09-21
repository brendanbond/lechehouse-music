import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Fade } from 'react-awesome-reveal';

import SectionContentRegion from '../components/SectionContentRegion';
import SimpleList from '../components/SimpleList';

const GearFive = () => {
  const gearFiveData = useStaticQuery<GatsbyTypes.GearFiveQuery>(graphql`
    query GearFive {
      gearFiveContent: file(relativePath: { eq: "gear_content_5.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <Fade triggerOnce>
      <SectionContentRegion
        leftToRight={true}
        image={gearFiveData?.gearFiveContent?.childImageSharp?.fluid}
        borderColor="betoYellow"
        borderLength={{ base: '200px', lg: '300px' }}
      >
        <SimpleList>
          <li>&apos;89 Gibson Les Paul Standard</li>
          <li>&apos;04 Gibson ES 333</li>
          <li>&apos;02 Gibson ES 345</li>
          <li>&apos;86 Epiphone Sheraton by Gibson</li>
          <li>Fender Stratocaster</li>
          <li>Fender Telecaster Custom</li>
          <li>Danelectro 56 Reissue Baritone</li>
          <li>Fender Paramount Acoustic Parlor Guitar</li>
          <li>70&apos;s Cameo Telecaster Bass</li>
          <br />
          <li>Various FX and stompboxes</li>
        </SimpleList>
      </SectionContentRegion>
    </Fade>
  );
};

export default GearFive;

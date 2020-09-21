import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Fade } from 'react-awesome-reveal';

import SectionContentRegion from '../components/SectionContentRegion';
import SimpleList from '../components/SimpleList';

const GearTwo = () => {
  const gearTwoData = useStaticQuery<GatsbyTypes.GearTwoQuery>(graphql`
    query GearTwo {
      gearTwoContent: file(relativePath: { eq: "gear_content_2.jpg" }) {
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
        leftToRight={false}
        image={gearTwoData?.gearTwoContent?.childImageSharp?.fluid}
        borderColor="betoYellow"
        borderLength={{ base: '200px', lg: '300px' }}
      >
        <SimpleList>
          <li>Rupert Neve Designs RNDI-S Stereo DI</li>
          <li>Radial JDI Passive Direct Box</li>
          <li>Furman HDS6 Headphone Distribution System</li>
          <br />
          <li>Master Room XL-121 Spring Reverb</li>
          <li>Roland RE-101 Space Echo</li>
          <li>Maestro PS-1 Phase Shifter </li>
          <li>Maestro MFZ Fuzz</li>
        </SimpleList>
      </SectionContentRegion>
    </Fade>
  );
};

export default GearTwo;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SectionContentRegion from '../components/SectionContentRegion';
import SimpleList from '../components/SimpleList';

const GearFive = () => {
  const gearFiveData = useStaticQuery<GatsbyTypes.GearFiveQuery>(graphql`
    query GearFive {
      gearFiveContent: imageSharp(
        fluid: { originalName: { eq: "gear_content_5.jpg" } }
      ) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `);

  return (
    <SectionContentRegion
      leftToRight={true}
      image={gearFiveData.gearFiveContent.fluid}
      borderColor="betoYellow"
      borderHeight="300px"
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
  );
};

export default GearFive;

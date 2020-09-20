import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SectionContentRegion from '../components/SectionContentRegion';
import SimpleList from '../components/SimpleList';

const GearFour = () => {
  const gearFourData = useStaticQuery<GatsbyTypes.GearFourQuery>(graphql`
    query GearFour {
      gearFourContent: imageSharp(
        fluid: { originalName: { eq: "gear_content_4.jpg" } }
      ) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `);

  return (
    <SectionContentRegion
      leftToRight={false}
      image={gearFourData.gearFourContent.fluid}
      borderColor="betoOrange"
      borderHeight="350px"
    >
      <SimpleList>
        <li>AEA R84 Ribbon Mic</li>
        <li>Beyerdynamic M160 Ribbon Mic</li>
        <li>SE Voodoo VR2 Active Ribbon Mic (2)</li>
        <li>Beyerdynamic M69(N) Vintage Dynamic Mic</li>
        <li>AKG D12 Vintage Kick Drum Mic</li>
        <li>Sennheiser 421</li>
        <li>Shure sm57 (2)</li>
        <li>Shure sm7B</li>
        <li>BeyerdynamicTG-X50 Large Diaphragm Dynamic Mic</li>
        <li>Audio-Technica ATM10A Omni Condenser (2)</li>
        <li>SE V7X Dynamic Mic</li>
        <li>Heil PR3 Dynamic Mic</li>
      </SimpleList>
    </SectionContentRegion>
  );
};

export default GearFour;

import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SectionContentRegion from '../components/SectionContentRegion';
import SimpleList from '../components/SimpleList';

const GearThree = () => {
  const gearThreeData = useStaticQuery<GatsbyTypes.GearThreeQuery>(graphql`
    query GearThree {
      gearThreeContent: imageSharp(
        fluid: { originalName: { eq: "gear_content_3.jpg" } }
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
      image={gearThreeData.gearThreeContent.fluid}
      borderColor="betoBlue"
      borderHeight="370px"
    >
      <SimpleList>
        <li>Vintage Ludwig Drum Kit (1968)</li>
        <br />
        <li>Elka Panther 100 Vintage Combo Organ</li>
        <li>Yamaha CP30 Electric Piano</li>
        <li>Hammond L100 Organ (1968)</li>
        <li>Yamaha Upright Piano </li>
        <br />
        <li>1974 Fender Super Reverb Silverface</li>
        <li>&apos;65 Reissue Fender Deluxe Reverb</li>
        <li>1973 Fender Champ Silverface</li>
        <li>Peavey Classic 30</li>
        <li>Peavey Classic 50</li>
        <li>National Gap-2 Vintage Solid State Amp</li>
      </SimpleList>
    </SectionContentRegion>
  );
};

export default GearThree;

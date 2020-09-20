import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Fade } from 'react-awesome-reveal';

import SectionContentRegion from '../components/SectionContentRegion';
import SimpleList from '../components/SimpleList';

const GearOne = () => {
  const gearOneData = useStaticQuery<GatsbyTypes.GearOneQuery>(graphql`
    query GearOne {
      gearOneContent: imageSharp(
        fluid: { originalName: { eq: "gear_content_1.jpg" } }
      ) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `);

  return (
    <Fade direction="right" triggerOnce fraction={0.1}>
      <SectionContentRegion
        leftToRight={true}
        image={gearOneData.gearOneContent.fluid}
        borderColor="betoOrange"
        borderHeight="360px"
      >
        <SimpleList>
          <li>Tascam 388 - 8 Track 1/4&quot; Tape Recorder</li>
          <li>Tascam M-312B - 12 Channel Desk</li>
          <li>Yamaha HS-8 Monitors</li>
          <li>Logic Pro X</li>
          <li>Apollo 16 Thunderbolt Recording Interface</li>
          <li>UAD, Soundtoys, Waves Plugins</li>
          <br />
          <li>UA 2-610 Tube Preamp</li>
          <li>Trident S20 Dual Microphone Preamp</li>
          <li>Warm Audio WA76 Compressor (2)</li>
          <li>UREI 7110 Limiter/Compressor (2)</li>
          <li>DBX 160A Compressor/Limiter (2)</li>
          <li>FMR RNC1773 Stereo Compressor</li>
        </SimpleList>
      </SectionContentRegion>
    </Fade>
  );
};

export default GearOne;

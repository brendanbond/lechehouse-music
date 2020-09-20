import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import SectionHeading from '../components/SectionHeading';
import Layout from '../components/Layout';

import About from '../sections/About';
import GearOne from '../sections/GearOne';
import GearTwo from '../sections/GearTwo';
import GearThree from '../sections/GearThree';
import GearFour from '../sections/GearFour';
import GearFive from '../sections/GearFive';
import Discog from '../sections/Discog';
import Booking from '../sections/Booking';

const HomePage = () => {
  const imageData = useStaticQuery(graphql`
    query HomePage {
      aboutHeader: imageSharp(
        fluid: { originalName: { eq: "about_banner.png" } }
      ) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      gearHeader: imageSharp(
        fluid: { originalName: { eq: "gear_banner.png" } }
      ) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
      discogHeader: imageSharp(
        fluid: { originalName: { eq: "discography_banner.png" } }
      ) {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  `);

  return (
    <Layout>
      {/* <SectionHeading
          leftToRight={true}
          image={imageData.aboutHeader.fluid}
          title="ABOUT"
        /> */}
      <About />
      <SectionHeading
        leftToRight={false}
        image={imageData.gearHeader.fluid}
        title="GEAR"
      />
      <GearOne />
      <GearTwo />
      <GearThree />
      <GearFour />
      <GearFive />
      <SectionHeading
        leftToRight={true}
        image={imageData.discogHeader.fluid}
        title="DISCOG"
      />
      <Discog />
      <Booking />
    </Layout>
  );
};

export default HomePage;

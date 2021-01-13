import React from 'react';
import { graphql } from 'gatsby';
import { Element as ScrollElement } from 'react-scroll';

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
import Video from '../sections/Video';

const HomePage = ({ data }: { data: GatsbyTypes.HomePageQuery }) => {
  return (
    <Layout>
      <ScrollElement name="about" />
      <About />
      <ScrollElement name="gear" />
      <SectionHeading
        leftToRight={false}
        image={data?.gearHeader?.childImageSharp?.fluid}
        title="GEAR"
      />
      <GearOne />
      <GearTwo />
      <GearThree />
      <GearFour />
      <GearFive />
      <ScrollElement name="videos" />
      <SectionHeading
        leftToRight={true}
        image={data?.videoHeader?.childImageSharp?.fluid}
        title="VIDEOS"
      />
      <Video />
      <ScrollElement name="discog" />
      <SectionHeading
        leftToRight={false}
        image={data?.discogHeader?.childImageSharp?.fluid}
        title="DISCOG"
      />
      <Discog />
      <ScrollElement name="booking" />
      <SectionHeading
        leftToRight={true}
        image={data?.bookingHeader?.childImageSharp?.fluid}
        title="BOOKING"
      />
      <Booking />
    </Layout>
  );
};

export const query = graphql`
  query HomePage {
    aboutHeader: file(relativePath: { eq: "about_banner.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    gearHeader: file(relativePath: { eq: "gear_banner.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    discogHeader: file(relativePath: { eq: "discography_banner.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    bookingHeader: file(relativePath: { eq: "booking_banner.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    videoHeader: file(relativePath: { eq: "video_banner.png" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default HomePage;

import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
} from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { Fade } from 'react-awesome-reveal';

import SectionContentRegion from '../components/SectionContentRegion';

const Booking = () => {
  const imageData = useStaticQuery<GatsbyTypes.BookingQuery>(graphql`
    query Booking {
      bookingContent: file(relativePath: { eq: "booking_content.jpg" }) {
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
        image={imageData?.bookingContent?.childImageSharp?.fluid}
        borderColor="betoBlue"
        borderLength={{ base: '200px', lg: '350px' }}
      >
        <form>
          <FormControl marginBottom="10px">
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" placeholder="Name" />
          </FormControl>
          <FormControl marginBottom="10px" isRequired>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input id="email" placeholder="Email" />
          </FormControl>
          <FormControl marginBottom="10px" isRequired>
            <FormLabel htmlFor="message">Message</FormLabel>
            <Textarea id="message" placeholder="Get in touch..." />
          </FormControl>
          <Button variantColor="gray" type="submit">
            Submit
          </Button>
        </form>
      </SectionContentRegion>
    </Fade>
  );
};

export default Booking;

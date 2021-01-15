import React from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  Box,
  Flex,
} from '@chakra-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import { use100vh } from 'react-div-100vh';

const Booking = () => {
  const imageData = useStaticQuery<GatsbyTypes.BookingQuery>(graphql`
    query Booking {
      bookingContent: file(relativePath: { eq: "booking_logo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const height = use100vh();
  if (!imageData.bookingContent?.childImageSharp?.fluid)
    throw new Error('Cannot find booking logo image');

  return (
    <Flex
      width="100%"
      flexDirection="column"
      justifyContent={{ base: 'flex-start', lg: 'center' }}
      alignItems="center"
      paddingTop="10px"
      height={{
        base: `calc(${height}px - 93px)`,
        lg: `calc(${height}px - 152px)`,
      }}
      style={{ scrollSnapAlign: 'start' }}
    >
      <Box width="150px" margin="10px auto">
        <Image fluid={imageData.bookingContent.childImageSharp.fluid} />
      </Box>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <FormControl marginBottom="10px">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" name="name" placeholder="Name" />
        </FormControl>
        <FormControl marginBottom="10px" isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input type="email" id="email" name="email" placeholder="Email" />
        </FormControl>
        <FormControl marginBottom="10px" isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" name="message" placeholder="Get in touch..." />
        </FormControl>
        <Flex alignItems="center" justifyContent="center">
          <Button margin="10px auto" variantColor="gray" type="submit">
            Submit
          </Button>
        </Flex>
      </form>
    </Flex>
  );
};

export default Booking;

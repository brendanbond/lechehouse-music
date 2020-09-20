import React from 'react';
import { Flex, FormControl, FormLabel, Input, Textarea } from '@chakra-ui/core';

const Booking = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      width="100%"
      height="calc(100vh - 136px)"
    >
      <form>
        <FormControl>
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" placeholder="First name" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="email">Email</FormLabel>
          <Input id="email" placeholder="Email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel htmlFor="message">Message</FormLabel>
          <Textarea id="message" placeholder="Get in touch..." />
        </FormControl>
      </form>
    </Flex>
  );
};

export default Booking;

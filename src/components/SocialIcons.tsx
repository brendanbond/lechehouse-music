import React from 'react';
import { Flex } from '@chakra-ui/core';

import MaskingTape from '../assets/images/social_icons_masking_tape.png';
import FacebookIconLink from './FacebookIconLink';
import InstagramIconLink from './InstagramIconLink';
import BandcampIconLink from './BandcampIconLink';
import YoutubeIconLink from './YoutubeIconLink';

const SocialIcons = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      position="sticky"
      bottom={{ base: 0, lg: '80px' }}
    >
      <Flex
        width="253px"
        height="81px"
        justifyContent="space-between"
        alignItems="center"
        padding="1rem 2rem"
        backgroundImage={{ base: '', lg: `url(${MaskingTape})` }}
        backgroundRepeat="no-repeat"
      >
        <FacebookIconLink
          to="https://facebook.com/lechehousemusic"
          width="30px"
        />
        <InstagramIconLink
          to="https://instagram.com/lechehousemusic"
          width="30px"
        />
        <BandcampIconLink
          to="https://lechehousemusic.bandcamp.com"
          width="30px"
        />
        <YoutubeIconLink
          to="https://youtube.com/channel/UCflGiEYpaIViAK_2OhQ8-Tg"
          width="30px"
        />
      </Flex>
    </Flex>
  );
};

export default SocialIcons;

import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Flex } from '@chakra-ui/core';

const Video = () => {
  return (
    <Fade triggerOnce>
      <Flex
        justifyContent="center"
        alignItems="center"
        height={{ base: 'calc(100vh - 93px)', lg: 'calc(100vh - 152px)' }}
        width="100%"
        style={{ scrollSnapAlign: 'start' }}
      >
        <div
          style={{
            position: 'relative',
            height: 0,
            overflow: 'hidden',
            width: '100%',
            paddingBottom: '56.25%',
          }}
        >
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            title="latest_video"
            src="https://www.youtube.com/embed/+lastest?list=UUflGiEYpaIViAK_2OhQ8-Tg"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </Flex>
    </Fade>
  );
};

export default Video;

/*
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style><div class='embed-container'><iframe src='https://www.youtube.com/embed/QILiHiTD3uc' frameborder='0' allowfullscreen></iframe></div>
*/

import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import betoTheme from './theme';

export const wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={betoTheme}>
      <CSSReset />
      <Global
        styles={css`
          html,
          body {
            scroll-snap-type: y mandatory;
            scroll-padding: 136px;
          }

          @media only screen and (max-width: 991px) {
            html,
            body {
              scroll-snap-type: y mandatory;
              scroll-padding: 92px;
            }
          }
        `}
      />
      {element}
    </ThemeProvider>
  );
};

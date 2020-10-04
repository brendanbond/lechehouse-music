import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import betoTheme from './theme';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={betoTheme}>
    <CSSReset />
    <Global
      styles={css`
        html {
          scroll-snap-type: y mandatory;
          scroll-padding: 136px;
        }
        body {
          scroll-snap-type: y mandatory;
        }
      `}
    />
    {element}
  </ThemeProvider>
);

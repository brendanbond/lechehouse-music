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
          body {
            background-color: #e6e6e6;
          }
        `}
      />
      {element}
    </ThemeProvider>
  );
};

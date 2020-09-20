import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import betoTheme from './theme';

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={betoTheme}>
    <CSSReset />
    {element}
  </ThemeProvider>
);

import { theme, ITheme } from '@chakra-ui/core';

import './src/assets/fonts/fg-klara/styles.css';

export default {
  ...theme,
  colors: {
    ...theme.colors,
    betoBlue: '#88b0d5',
    betoOrange: '#ff5c00',
    betoYellow: '#eca900',
  },
  fonts: {
    ...theme.fonts,
    heading: `'FG-Klara', ${theme.fonts.heading}`,
    body: `'Kumbh Sans', ${theme.fonts.body}`,
  },
  sizes: {
    ...theme.sizes,
    full: '1140px',
  },
};

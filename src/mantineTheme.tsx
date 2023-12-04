import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  colors: {
    primary: [
      '#E50914', // Red
      '#FF181F',
      '#B20710',
      '#7A0D0E',
      '#4F090A',
      '#2B0607',
      '#150303',
      '#0A0101',
      '#050000',
      '#000000', // Black
    ],
    secondary: [
      '#F5F5F1', // Light Gray
      '#CCCCCC',
      '#A6A6A1',
      '#808080',
      '#595959',
      '#404040',
      '#262626',
      '#0D0D0D',
      '#070707',
      '#000000', // Black
    ],
  },

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },

  headings: {
    fontFamily: 'Helvetica, Arial, sans-serif',
    sizes: {
      h1: { fontSize: rem(48) },
      h2: { fontSize: rem(36) },
      h3: { fontSize: rem(24) },
      h4: { fontSize: rem(18) },
      h5: { fontSize: rem(16) },
      h6: { fontSize: rem(14) },
    },
  },
});

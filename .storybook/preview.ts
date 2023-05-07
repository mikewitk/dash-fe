import type { Preview } from '@storybook/react'
import '../src/index.css'

const customViewports = {
  small: {
    name: 'Small',
    styles: {
      width: '640px',
      height: '800px',
    },
  },
  medium: {
    name: 'Medium',
    styles: {
      width: '768px',
      height: '800px',
    },
  },
  large: {
    name: 'Large',
    styles: {
      width: '1024px',
      height: '800px',
    },
  },
  extraLarge: {
    name: 'Extra Large',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  '2xLarge': {
    name: '2x Extra Large',
    styles: {
      width: '1536px',
      height: '800px',
    },
  },
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    viewport: {
      viewports: customViewports,
    },
  },
}

export default preview

/*
 640px < --- width --- > 768px : max-width: 640px
 769px < --- width --- > 1024px : max-width: 768px
 1025px < --- width --- > 1280px : max-width: 1024px
 1280px < --- width --- > ----px : max-width: 1280px
*/

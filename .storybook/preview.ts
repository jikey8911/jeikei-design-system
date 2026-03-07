import React from 'react';
import type { Preview } from "@storybook/react";
import '../styles/neural-theme.css'; // Assuming this exists or will be created
import '../styles/tokens.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: 'neural',
      values: [
        {
          name: 'neural',
          value: '#05070a',
        },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

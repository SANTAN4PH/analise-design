/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|mjs)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: '@storybook/html-vite',
  staticDirs: ['../public'],
};

export default config;

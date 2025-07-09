const config = {
  stories: ['../src/components/**/stories.tsx'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  staticDirs: ['../public'],
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  docs: {
    defaultName: 'Documentation'
  }
}
export default config

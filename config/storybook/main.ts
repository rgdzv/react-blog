// import type { StorybookConfig } from '@storybook/react-webpack5'

const config = {
    stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],

    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-a11y',
        '@storybook/addon-webpack5-compiler-babel',
        '@chromatic-com/storybook'
    ],

    framework: {
        name: '@storybook/react-webpack5',
        options: {}
    },

    core: {
        builder: {
            name: '@storybook/builder-webpack5',
            options: {
                fsCache: true,
                lazyCompilation: true
            }
        }
    },

    docs: {},

    staticDirs: ['../../public'],

    typescript: {
        reactDocgen: 'react-docgen-typescript'
    }
}

export default config

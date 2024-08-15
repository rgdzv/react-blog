import path from 'path'
import webpack, { type RuleSetRule } from 'webpack'
import { type BuildPaths } from '../build/types/config'
import { buildCSSLoader } from '../build/loaders/buildCSSLoader'
import { buildSVGLoader } from '../build/loaders/buildSVGLoader'

export default ({
    config
}: {
    config: webpack.Configuration
}): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: '',
        build: '',
        html: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: ''
    }

    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('')
    })

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('.ts', '.tsx')

    if (config.module?.rules !== undefined) {
        // @ts-expect-error RuleSetRule
        config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
            if (String(rule.test).includes('svg')) {
                return { ...rule, exclude: /\.svg$/i }
            }
            return rule
        })
    }

    config.module?.rules?.push({
        test: /\.(jsx|tsx|js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: [
                    '@babel/preset-env',
                    '@babel/preset-typescript',
                    [
                        '@babel/preset-react',
                        {
                            runtime: 'automatic'
                        }
                    ]
                ],
                plugins: ['@babel/plugin-transform-runtime']
            }
        }
    })
    config.module?.rules?.push(buildSVGLoader())
    config.module?.rules?.push(buildCSSLoader(true))
    config.plugins?.push(definePlugin)

    return config
}

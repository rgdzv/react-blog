import { type BuildPaths } from '../build/types/config'
import webpack, { type RuleSetRule } from 'webpack'
import path from 'path'
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
        src: path.resolve(__dirname, '..', '..', 'src')
    }

    const definePlugin = new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(true),
        __API__: JSON.stringify('')
    })

    config.resolve?.modules?.push(paths.src)
    config.resolve?.extensions?.push('ts', 'tsx')

    if (config.module?.rules !== undefined) {
        // @ts-expect-error RuleSetRule
        config.module.rules = config.module?.rules?.map((rule: RuleSetRule) => {
            if (String(rule.test).includes('svg')) {
                return { ...rule, exclude: /\.svg$/i }
            }
            return rule
        })
    }

    config.module?.rules?.push(buildSVGLoader())
    config.module?.rules?.push(buildCSSLoader(true))
    config.plugins?.push(definePlugin)

    return config
}

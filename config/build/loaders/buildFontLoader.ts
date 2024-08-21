import type { RuleSetRule } from 'webpack'

export function buildFontLoader(): RuleSetRule {
    return {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
            filename: './assets/fonts/[name][ext][query]'
        }
    }
}

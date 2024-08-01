import type webpack from 'webpack'

export function buildFontLoader(): webpack.RuleSetRule {
    return {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
            filename: './assets/fonts/[name][ext][query]'
        }
    }
}

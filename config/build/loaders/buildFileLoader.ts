import type webpack from 'webpack'

export function buildFileLoader(): webpack.RuleSetRule {
    return {
        test: /\.(jpg|png|gif|jpeg)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
            filename: './assets/images/[name][ext][query]'
        }
    }
}

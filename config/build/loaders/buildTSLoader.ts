import type webpack from 'webpack'

export function buildTSLoader(): webpack.RuleSetRule {
    return {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
}
import type { RuleSetRule } from 'webpack'

export function buildTSLoader(): RuleSetRule {
    return {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }
}

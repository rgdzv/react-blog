import type webpack from 'webpack'

export function buildSVGLoader(): webpack.RuleSetRule {
    return {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack']
    }
}
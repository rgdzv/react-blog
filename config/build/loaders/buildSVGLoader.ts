import type webpack from 'webpack'

export function buildSVGLoader(): webpack.RuleSetRule {
    return {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{ loader: '@svgr/webpack', options: { memo: true } }]
    }
}

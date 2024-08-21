import type { RuleSetRule } from 'webpack'

export function buildSVGLoader(): RuleSetRule {
    return {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [
            {
                loader: '@svgr/webpack',
                options: { memo: true, titleProp: true }
            }
        ]
    }
}

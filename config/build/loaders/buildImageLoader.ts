import type { RuleSetRule } from 'webpack'

export function buildImageLoader(): RuleSetRule {
    return {
        test: /\.(jpg|png|gif|jpeg)$/,
        exclude: /node_modules/,
        type: 'asset/resource',
        generator: {
            filename: './assets/images/[name][ext][query]'
        }
    }
}

import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'
import type { RuleSetRule } from 'webpack'

interface buildBabelLoaderProps {
    isDev: boolean
    isTsx: boolean
}

export function buildBabelLoader({
    isDev,
    isTsx
}: buildBabelLoaderProps): RuleSetRule {
    const isProd = !isDev
    return {
        test: isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: [
                    '@babel/preset-env',
                    [
                        '@babel/preset-typescript',
                        {
                            isTsx
                        }
                    ],
                    [
                        '@babel/preset-react',
                        {
                            runtime: 'automatic'
                        }
                    ]
                ],
                plugins: [
                    '@babel/plugin-transform-runtime',
                    isTsx &&
                        isProd && [
                            babelRemovePropsPlugin,
                            {
                                props: ['data-testid']
                            }
                        ]
                ].filter(Boolean)
            }
        }
    }
}

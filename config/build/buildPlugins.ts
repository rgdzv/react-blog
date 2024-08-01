import HTMLWebpackPlugin from 'html-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export function buildPlugins({
    paths,
    isDev,
    apiUrl
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const isProd = !isDev

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),

        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev),
            __API__: JSON.stringify(apiUrl)
        })
    ]

    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin())
        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false
            })
        )
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            })
        )
        plugins.push(
            new CopyPlugin({
                patterns: [{ from: paths.locales, to: paths.buildLocales }]
            })
        )
    }

    return plugins
}

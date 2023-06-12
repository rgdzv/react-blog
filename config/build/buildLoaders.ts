import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { type BuildOptions } from './types/config'

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) =>
              Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const SVGRLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(jpg|png|gif|jpeg)$/,
    exclude: /node_modules/,
    type: 'asset/resource',
    generator: {
      filename: './assets/images/[name][ext][query]'
    }
  }

  return [fileLoader, SVGRLoader, typescriptLoader, cssLoader]
}

import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCSSLoader } from './loaders/buildCSSLoader'
import { buildSVGLoader } from './loaders/buildSVGLoader'
import { buildImageLoader } from './loaders/buildImageLoader'
import { buildFontLoader } from './loaders/buildFontLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = buildCSSLoader(isDev)
    const SVGRLoader = buildSVGLoader()
    const imageLoader = buildImageLoader()
    const fontLoader = buildFontLoader()

    const codeBabelLoader = buildBabelLoader({ isDev, isTsx: false })
    const tsxCodeBabelLoader = buildBabelLoader({ isDev, isTsx: true })

    return [
        fontLoader,
        imageLoader,
        SVGRLoader,
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoader
    ]
}

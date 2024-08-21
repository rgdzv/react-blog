import { buildCSSLoader } from './loaders/buildCSSLoader'
import { buildSVGLoader } from './loaders/buildSVGLoader'
import { buildImageLoader } from './loaders/buildImageLoader'
import { buildFontLoader } from './loaders/buildFontLoader'
import { buildBabelLoader } from './loaders/buildBabelLoader'
import type { BuildOptions } from './types/config'
import type { RuleSetRule } from 'webpack'

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
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

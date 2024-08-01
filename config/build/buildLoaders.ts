import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCSSLoader } from './loaders/buildCSSLoader'
import { buildSVGLoader } from './loaders/buildSVGLoader'
import { buildTSLoader } from './loaders/buildTSLoader'
import { buildImageLoader } from './loaders/buildImageLoader'
import { buildFontLoader } from './loaders/buildFontLoader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const cssLoader = buildCSSLoader(isDev)
    const typescriptLoader = buildTSLoader()
    const SVGRLoader = buildSVGLoader()
    const imageLoader = buildImageLoader()
    const fontLoader = buildFontLoader()

    return [fontLoader, imageLoader, SVGRLoader, typescriptLoader, cssLoader]
}

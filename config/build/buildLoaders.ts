import type webpack from 'webpack'
import { type BuildOptions } from './types/config'
import { buildCSSLoader } from './loaders/buildCSSLoader'
import { buildSVGLoader } from './loaders/buildSVGLoader'
import { buildTSLoader } from './loaders/buildTSLoader'
import { buildFileLoader } from './loaders/buildFileLoader'

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    
    const cssLoader = buildCSSLoader(isDev)
    const typescriptLoader = buildTSLoader()
    const SVGRLoader = buildSVGLoader()
    const fileLoader = buildFileLoader()

    return [fileLoader, SVGRLoader, typescriptLoader, cssLoader]
}

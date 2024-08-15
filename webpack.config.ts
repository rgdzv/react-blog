import path from 'path'
import type webpack from 'webpack'
import {
    type BuildEnv,
    type BuildMode,
    type BuildPaths
} from './config/build/types/config'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'

function getApiUrl(mode: BuildMode, apiUrl?: string): string {
    if (apiUrl !== undefined) {
        return apiUrl
    }
    if (mode === 'production') {
        return '/api'
    }

    return 'http://localhost:8000'
}

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
        locales: path.resolve(__dirname, 'public', 'locales'),
        buildLocales: path.resolve(__dirname, 'build', 'locales')
    }

    const mode = env.mode ?? 'development'
    const isDev = mode === 'development'
    const PORT = env.port ?? 3000
    const apiUrl = getApiUrl(mode, env?.apiUrl)

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl
    })

    return config
}

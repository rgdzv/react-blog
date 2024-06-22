declare module '*.scss' {
    const content: any
    export default content
}

declare module '*.svg' {
    import { type SVGProps, type FC } from 'react'
    const SVG: FC<SVGProps<SVGElement>>
    export default SVG
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.gif'

declare const __IS_DEV__: boolean
declare const __API__: string

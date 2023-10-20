declare module '*.scss' {
    const content: any
    export default content
}
declare module '*.svg' {
    import { type ReactElement, type SVGProps } from 'react'
    const content: (props: SVGProps<SVGElement>) => ReactElement
    export default content
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'
declare module '*.gif'

declare const __IS_DEV__: boolean
declare const __API__: string

import {
    type ReactElement,
    type FC,
    useRef,
    type MutableRefObject
} from 'react'
import { classNames, useInfiniteScroll } from 'shared/lib'
import styles from './Page.module.scss'

type ClassNameType = 'notFound' | 'articles'
interface PagePropsInterface {
    children: ReactElement | string
    className?: string
    dataTestId: string
    onScrollEnd?: () => void
}

export const Page: FC<PagePropsInterface> = ({
    children,
    className,
    dataTestId,
    onScrollEnd
}) => {
    const wrapper = useRef() as MutableRefObject<HTMLDivElement>
    const trigger = useRef() as MutableRefObject<HTMLDivElement>

    const wrapperCondition = className === 'articles' ? wrapper : null
    const triggerCondition = onScrollEnd !== undefined && (
        <div ref={trigger} className={styles.trigger} />
    )

    const classNameFinal = classNames(styles.page, {}, [
        styles[className as ClassNameType]
    ])

    useInfiniteScroll({
        trigger,
        wrapperCondition,
        callback: onScrollEnd
    })

    return (
        <section
            ref={wrapperCondition}
            className={classNameFinal}
            data-testid={dataTestId}
        >
            {children}
            {triggerCondition}
        </section>
    )
}

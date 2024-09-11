import { memo, useRef } from 'react'
import type { FC, MutableRefObject, ReactElement, UIEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { useAppDispatch } from 'app/providers/StoreProvider'
import { uiActions } from 'features/UI'
import { classNames, useThrottle } from 'shared/lib'
import styles from './Page.module.scss'

type ClassNameType = 'notFound' | 'articles' | 'articleDetails'

interface PagePropsInterface {
    children: ReactElement | string
    className?: string
    dataTestId: string
}

export const Page: FC<PagePropsInterface> = memo(
    ({ children, className, dataTestId }) => {
        const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>
        const dispatch = useAppDispatch()
        const { pathname } = useLocation()

        const classNameFinal = classNames(styles.page, {}, [
            styles[className as ClassNameType]
        ])

        const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
            dispatch(
                uiActions.setScrollPosition({
                    position: e.currentTarget.scrollTop,
                    path: pathname
                })
            )
        }, 500)

        return (
            <section
                className={classNameFinal}
                data-testid={dataTestId}
                ref={wrapperRef}
                onScroll={onScroll}
            >
                {children}
            </section>
        )
    }
)

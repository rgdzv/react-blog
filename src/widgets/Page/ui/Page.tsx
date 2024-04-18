import { type ReactElement, type FC } from 'react'
import { classNames } from 'shared/lib'
import styles from './Page.module.scss'

type ClassNameType = 'notFound' | 'articles'

interface PagePropsInterface {
    children: ReactElement | string
    className?: string
    dataTestId: string
}

export const Page: FC<PagePropsInterface> = ({
    children,
    className,
    dataTestId
}) => {
    const classNameFinal = classNames(styles.page, {}, [
        styles[className as ClassNameType]
    ])

    return (
        <section className={classNameFinal} data-testid={dataTestId}>
            {children}
        </section>
    )
}

import { type ReactNode, type FC, useMemo } from 'react'
import styles from './ArticlesTypeTabs.module.scss'
import { useTranslation } from 'react-i18next'
import { ArticleType } from 'entities_/Article'
import { Button } from 'shared/ui'

interface TabItem {
    value: string
    content: ReactNode
}

// interface ArticlesTypeTabsPropsInterface {}

export const ArticlesTypeTabs: FC = () => {
    const { t } = useTranslation('article')

    const typeTabs = useMemo<TabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('Все статьи')
            },
            {
                value: ArticleType.IT,
                content: t('Айти')
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Экономика')
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Наука')
            }
        ],
        [t]
    )

    const tabs = typeTabs.map((tab) => {
        return (
            <Button
                key={tab.value}
                className='articleTab'
                selected={tab.value === ArticleType.ALL}
            >
                {tab.content}
            </Button>
        )
    })

    return <div className={styles.articlesTabs}>{tabs}</div>
}

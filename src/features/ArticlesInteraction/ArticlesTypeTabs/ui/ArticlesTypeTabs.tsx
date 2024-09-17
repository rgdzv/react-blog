import { memo } from 'react'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import type { ArticleType } from 'entities_/Article'
import { Button } from 'shared/ui'
import { typeTabs } from '../model/utils/tabs'
import styles from './ArticlesTypeTabs.module.scss'
interface ArticlesTypeTabsPropsInterface {
    type: ArticleType
    onChangeType: (type: ArticleType) => void
}

export const ArticlesTypeTabs: FC<ArticlesTypeTabsPropsInterface> = memo(
    ({ type, onChangeType }) => {
        const { t } = useTranslation('article')

        const tabs = typeTabs.map((tab) => {
            const selected = tab.value === type

            const onClick = (): void => {
                onChangeType(tab.value)
            }

            const content = t(tab.content)

            return (
                <Button
                    key={tab.value}
                    className='articleTab'
                    selected={selected}
                    onClick={onClick}
                >
                    {content}
                </Button>
            )
        })

        return <div className={styles.articlesTabs}>{tabs}</div>
    }
)

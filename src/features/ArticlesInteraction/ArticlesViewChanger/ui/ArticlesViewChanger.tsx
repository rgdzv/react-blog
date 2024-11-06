import { memo, useEffect } from 'react'
import type { FC } from 'react'
import { useArticleFilters } from 'pages/ArticlesPage'
import { ArticleView } from 'entities_/Article'
import { Button } from 'shared/ui'
import { useMediaQuery } from 'shared/lib'
import { viewTypes } from '../model/utils/viewTypes'
import styles from './ArticlesViewChanger.module.scss'

export const ArticlesViewChanger: FC = memo(() => {
    const { view, onChangeView } = useArticleFilters()
    const matches = useMediaQuery('(max-width: 450px)')

    const viewIcons = viewTypes.map((item) => {
        const selected = view === item.view

        const onClick = (): void => {
            onChangeView(item.view)
        }

        return (
            <Button
                key={item.view}
                className={item.className as 'left_bordered' | 'right_bordered'}
                selected={selected}
                onClick={onClick}
                disabled={matches}
            >
                {item.icon}
            </Button>
        )
    })

    useEffect(() => {
        if (matches) {
            onChangeView(ArticleView.SMALL)
        }
    }, [matches, onChangeView])

    return (
        <div className={styles.viewChanger} data-testid='articles-view-changer'>
            {viewIcons}
        </div>
    )
})

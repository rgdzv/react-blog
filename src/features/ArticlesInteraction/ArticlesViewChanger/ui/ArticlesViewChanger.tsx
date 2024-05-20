import { type FC } from 'react'
import styles from './ArticlesViewChanger.module.scss'
import { Button } from 'shared/ui'
import { useArticleFilters } from 'pages/ArticlesPage'
import { viewTypes } from '../model/utils/viewTypes'

export const ArticlesViewChanger: FC = () => {
    const { view, onChangeView } = useArticleFilters()

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
            >
                {item.icon}
            </Button>
        )
    })

    return <div className={styles.viewChanger}>{viewIcons}</div>
}

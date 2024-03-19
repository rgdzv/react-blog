import { type FC } from 'react'
import styles from './ArticlesViewChanger.module.scss'
import { Button } from 'shared/ui'
import { ListIcon, TileIcon } from 'shared/assets'
import { ArticleView } from 'entities_/Article'
import { useArticleFilters } from 'pages/ArticlesPage'

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: <ListIcon data-testid='list-icon' />,
        className: 'left_bordered'
    },
    {
        view: ArticleView.SMALL,
        icon: <TileIcon data-testid='tile-icon' />,
        className: 'right_bordered'
    }
]

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

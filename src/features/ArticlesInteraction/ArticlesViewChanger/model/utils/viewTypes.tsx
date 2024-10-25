import { ArticleView } from 'entities_/Article'
import { ListIcon, TileIcon } from 'shared/assets'

export const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: <ListIcon data-testid='list-icon' title='Список' />,
        className: 'left_bordered'
    },
    {
        view: ArticleView.SMALL,
        icon: <TileIcon data-testid='tile-icon' title='Плитка' />,
        className: 'right_bordered'
    }
]

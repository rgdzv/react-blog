import { ArticleView } from 'entities_/Article'
import { ListIcon, TileIcon } from 'shared/assets'

export const viewTypes = [
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

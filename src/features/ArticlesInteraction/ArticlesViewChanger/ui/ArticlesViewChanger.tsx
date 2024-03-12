import { type FC } from 'react'
import styles from './ArticlesViewChanger.module.scss'
import { Button } from 'shared/ui'
import { ListIcon, TileIcon } from 'shared/assets'

// interface ArticlesViewChangerPropsInterface {}

export const ArticlesViewChanger: FC = () => {
    return (
        <div className={styles.viewChanger}>
            <Button className='left_bordered'>
                <ListIcon data-testid='list-icon' />
            </Button>
            <Button className='right_bordered'>
                <TileIcon data-testid='tile-icon' />
            </Button>
        </div>
    )
}

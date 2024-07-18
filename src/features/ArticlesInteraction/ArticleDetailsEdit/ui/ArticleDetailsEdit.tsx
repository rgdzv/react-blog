import { type FC } from 'react'
import { Button } from 'shared/ui'
import styles from './ArticleDetailsEdit.module.scss'
import { useTranslation } from 'react-i18next'

export const ArticleDetailsEdit: FC = () => {
    const { t } = useTranslation('article')
    const editButtonName = t('Редактировать')

    return (
        <div className={styles.articleDetailsEdit}>
            <Button className='bordered'>{editButtonName}</Button>
        </div>
    )
}

import { type FC, memo } from 'react'
import { Button } from 'shared/ui'
import { useTranslation } from 'react-i18next'
import styles from './ArticleDetailsEdit.module.scss'

interface ArticleDetailsEditProps {
    canBeEdited: boolean
}

export const ArticleDetailsEdit: FC<ArticleDetailsEditProps> = memo(
    ({ canBeEdited }) => {
        const { t } = useTranslation('article')
        const editButtonName = t('Редактировать')

        return (
            <div className={styles.articleDetailsEdit}>
                <Button className='bordered' disabled={!canBeEdited}>
                    {editButtonName}
                </Button>
            </div>
        )
    }
)

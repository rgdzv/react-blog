import { type FC } from 'react'
import styles from './ArticleListItem.module.scss'
import { AppLink, Button, Image } from 'shared/ui'
import { EyeIcon } from 'shared/assets'

interface ArticleListItemPropsInterface {
    avatar: string
    articleImage: string
}

/* eslint-disable i18next/no-literal-string */

export const ArticleListItem: FC<ArticleListItemPropsInterface> = ({
    avatar,
    articleImage
}) => {
    return (
        <div className={styles.listItem}>
            <div className={styles.userInfo}>
                <AppLink to='/'>
                    <Image
                        className='article_avatar'
                        alt='article avatar'
                        src={avatar}
                    />
                </AppLink>
                <span className={styles.userName}>Ulbi TV</span>
                <span className={styles.creationDate}> 21.02.2023</span>
            </div>
            <div className={styles.articleTitles}>
                <p className={styles.title}>
                    Как разработать Telegram-бота для генерации сложных паролей
                </p>
                <p className={styles.subtitle}>Что нового в JS за 2022 год?</p>
            </div>
            <Image
                className='article_list_img'
                alt='article image'
                src={articleImage}
            />
            <div className={styles.articleContent}>
                <p>
                    Программа, которую по традиции называют «Hello, world!»,
                    очень проста. Она выводит куда-либо фразу «Hello, world!»,
                    или другую подобную, средствами некоего языка.
                </p>
            </div>
            <div className={styles.listItemFooter}>
                <AppLink to='/'>
                    <Button className='bordered'>Читать далее...</Button>
                </AppLink>
                <div className={styles.views}>
                    <EyeIcon data-testid='eye-open-icon' />
                    <span>12303</span>
                </div>
            </div>
        </div>
    )
}

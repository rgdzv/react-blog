import { useEffect, type FC } from 'react'
// import { AppLink, Image } from 'shared/ui'
// import styles from './ArticleDetails.module.scss'
import { useAppDispatch, useAppSelector } from 'app/providers/StoreProvider'
import { useParams } from 'react-router-dom'
import { getArticleById } from '../../model/services/getArticleById/getArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import { DynamicReducerLoader, type ReducersList } from 'shared/components'
import { getArticleDetailsIsLoading } from '../../model/selectors/getArticleDetailsIsLoading/getArticleDetailsIsLoading'
// import { getArticleDetailsError } from '../../model/selectors/getArticleDetailsError/getArticleDetailsError'
// import { getArticleDetailsData } from '../../model/selectors/getArticleDetailsData/getArticleDetailsData'

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer
}

// interface ArticleDetailsPropsInterface {}

export const ArticleDetails: FC = () => {
    const dispatch = useAppDispatch()
    const isLoading = useAppSelector(getArticleDetailsIsLoading)
    // const error = useAppSelector(getArticleDetailsError)
    // const atricle = useAppSelector(getArticleDetailsData)
    const { id } = useParams()

    useEffect(() => {
        void dispatch(getArticleById(id as string))
    }, [dispatch, id])

    if (isLoading) {
        return <div></div>
    }

    return (
        <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
            {/* <div className={styles.listItem}>
                <div className={styles.userInfo}>
                    <AppLink
                        to={`/profile/${id}`}
                        className={styles.userInfoLink}
                    >
                        <Image
                            className='article_avatar'
                            alt='article avatar'
                            src={avatar}
                        />
                        <span className={styles.userName}>{userName}</span>
                    </AppLink>
                    <span className={styles.creationDate}>{date}</span>
                </div>
                <div className={styles.articleTitles}>
                    <p className={styles.title}>{title}</p>
                    <p className={styles.subtitle}>{subtitle}</p>
                </div>
                <Image
                    className='article_list_img'
                    alt='article image'
                    src={articleImage}
                />
                <div className={styles.articleContent}>
                    <p className={styles.text}>{textBlock}</p>
                </div>
            </div> */}
        </DynamicReducerLoader>
    )
}

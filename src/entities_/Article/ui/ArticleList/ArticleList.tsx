import { type FC } from 'react'
import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import { noavatar, noimage } from 'shared/assets'

/* eslint-disable @typescript-eslint/no-empty-interface */

interface ArticleListPropsInterface {}

export const ArticleList: FC<ArticleListPropsInterface> = () => {
    const avatar = noavatar
    const articleImage = noimage
    return <ArticleListItem avatar={avatar} articleImage={articleImage} />
}

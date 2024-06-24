import { Image } from 'shared/ui'
import { type ArticleImageBlock } from '../../model/types/article'
import { type FC } from 'react'
import { noimage } from 'shared/assets'

interface ArticleDetailsBlockImagePropsInterface {
    block: ArticleImageBlock
}

export const ArticleDetailsBlockImage: FC<
    ArticleDetailsBlockImagePropsInterface
> = ({ block }) => {
    const imageCondition = block?.src ?? noimage

    return (
        <Image
            src={imageCondition}
            className='article_details_img'
            alt={block?.title}
        />
    )
}

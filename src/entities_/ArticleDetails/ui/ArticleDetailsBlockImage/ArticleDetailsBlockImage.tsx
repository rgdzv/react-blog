import { Image } from 'shared/ui'
import { type ArticleImageBlock } from '../../model/types/articleDetails'
import { type FC } from 'react'
import { noimage } from 'shared/assets'

interface ArticleDetailsBlockImagePropsInterface {
    block: ArticleImageBlock
}

export const ArticleDetailsBlockImage: FC<
    ArticleDetailsBlockImagePropsInterface
> = ({ block }) => {
    return (
        <Image
            src={block?.src}
            className='article_details_img'
            alt={block?.title}
            errorImage={noimage}
        />
    )
}

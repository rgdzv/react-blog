import type { FC } from 'react'
import { Image } from 'shared/ui'
import { noimage } from 'shared/assets'
import type { ArticleImageBlock } from '../../model/types/articleDetails'

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

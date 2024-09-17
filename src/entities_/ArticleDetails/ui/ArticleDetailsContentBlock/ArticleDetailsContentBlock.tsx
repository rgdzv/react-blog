import { ArticleBlockType } from '../../model/const/articleDetailsConst'
import { ArticleDetailsBlockCode } from '../ArticleDetailsBlockCode/ArticleDetailsBlockCode'
import { ArticleDetailsBlockImage } from '../ArticleDetailsBlockImage/ArticleDetailsBlockImage'
import { ArticleDetailsBlockText } from '../ArticleDetailsBlockText/ArticleDetailsBlockText'
import type { ArticleBlock } from '../../model/types/articleDetails'

export const ArticleDetailsContentBlock = (
    block: ArticleBlock
): JSX.Element | null => {
    switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleDetailsBlockCode key={block.id} block={block} />
        case ArticleBlockType.IMAGE:
            return <ArticleDetailsBlockImage key={block.id} block={block} />
        case ArticleBlockType.TEXT:
            return <ArticleDetailsBlockText key={block.id} block={block} />
        default:
            return null
    }
}

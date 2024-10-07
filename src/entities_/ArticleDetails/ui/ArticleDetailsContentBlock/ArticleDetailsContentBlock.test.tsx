import { ArticleBlockType } from '../../model/const/articleDetailsConst'
import { ArticleDetailsBlockCode } from '../ArticleDetailsBlockCode/ArticleDetailsBlockCode'
import { ArticleDetailsBlockImage } from '../ArticleDetailsBlockImage/ArticleDetailsBlockImage'
import { ArticleDetailsBlockText } from '../ArticleDetailsBlockText/ArticleDetailsBlockText'
import { ArticleDetailsContentBlock } from './ArticleDetailsContentBlock'
import type { ArticleBlock } from '../../model/types/articleDetails'

describe('ArticleDetailsContentBlock', () => {
    test('should render correct block component based on type', () => {
        const mockBlocks: ArticleBlock[] = [
            { id: '1', type: ArticleBlockType.CODE, code: 'test-code' },
            {
                id: '2',
                type: ArticleBlockType.IMAGE,
                src: 'test-image-src',
                title: 'test-img-alt'
            },
            {
                id: '3',
                type: ArticleBlockType.TEXT,
                title: 'test title',
                paragraph: 'test paragraph'
            }
        ]

        mockBlocks.forEach((block: ArticleBlock) => {
            const result = ArticleDetailsContentBlock(block)
            switch (block.type) {
                case ArticleBlockType.CODE:
                    expect(result).toEqual(
                        <ArticleDetailsBlockCode key={block.id} block={block} />
                    )
                    break
                case ArticleBlockType.IMAGE:
                    expect(result).toEqual(
                        <ArticleDetailsBlockImage
                            key={block.id}
                            block={block}
                        />
                    )
                    break
                case ArticleBlockType.TEXT:
                    expect(result).toEqual(
                        <ArticleDetailsBlockText key={block.id} block={block} />
                    )
                    break
            }
        })
    })

    it('should render null for unknown block type', () => {
        const unknownBlock = undefined
        const result = ArticleDetailsContentBlock(unknownBlock)

        expect(result).toBeNull()
    })
})

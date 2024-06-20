import { ArticleDetails } from 'entities_/Article'
import { type FC } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from 'widgets/Page'

const ArticleDetailsPage: FC = () => {
    const { id } = useParams()

    if (id === undefined) {
        return null
    }

    return (
        <Page dataTestId='articles-page-details' className='articleDetails'>
            <>
                <ArticleDetails />
            </>
        </Page>
    )
}

export default ArticleDetailsPage

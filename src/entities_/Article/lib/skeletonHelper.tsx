import { type ReactElement } from 'react'
import { Skeleton } from 'shared/ui'

export const skeletonHelper = (
    isLoading: boolean,
    item: ReactElement
): ReactElement => {
    if (isLoading) return <Skeleton />
    return item
}

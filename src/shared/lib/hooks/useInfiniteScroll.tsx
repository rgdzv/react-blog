import { type MutableRefObject, useEffect } from 'react'

export interface UseInfiniteScrollProps {
    callback?: () => void
    trigger: MutableRefObject<HTMLElement>
    wrapperCondition: MutableRefObject<HTMLElement> | null
}

export const useInfiniteScroll = ({
    callback,
    wrapperCondition,
    trigger
}: UseInfiniteScrollProps): void => {
    useEffect(() => {
        // const wrapperElement = wrapperCondition?.current
        const triggerElement = trigger?.current

        let observer: IntersectionObserver | null = null

        if (callback !== undefined) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 1.0
            }

            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)

            observer.observe(triggerElement)
        }

        return () => {
            if (observer !== null && triggerElement !== null) {
                observer.unobserve(triggerElement)
            }
        }
    }, [callback, trigger, wrapperCondition])
}

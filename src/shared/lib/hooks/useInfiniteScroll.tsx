import { useEffect } from 'react'
import type { MutableRefObject } from 'react'

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
        const wrapperElement = wrapperCondition?.current
        const triggerElement = trigger?.current

        let observer: IntersectionObserver | null = null

        if (callback !== undefined) {
            const options = {
                root: wrapperElement,
                rootMargin: '0px',
                threshold: 1.0
            }

            observer = new IntersectionObserver(([entry]) => {
                console.log(entry.isIntersecting)
                if (entry.isIntersecting) {
                    callback()
                }
            }, options)

            if (wrapperElement !== null) {
                observer.observe(triggerElement)
            }
        }

        return () => {
            if (observer !== null && triggerElement !== null) {
                observer.unobserve(triggerElement)
            }
        }
    }, [callback, trigger, wrapperCondition])
}

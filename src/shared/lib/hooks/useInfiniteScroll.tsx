import { type MutableRefObject, useEffect } from 'react'

export interface UseInfiniteScrollProps {
    callback?: () => void
    trigger: MutableRefObject<HTMLElement>
    wrapperCondition: MutableRefObject<HTMLElement> | null
}

export function useInfiniteScroll({
    callback,
    wrapperCondition,
    trigger
}: UseInfiniteScrollProps): void {
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
                console.log('OBSERVER TRIGGERED 1')
                if (entry.isIntersecting) {
                    console.log('OBSERVER TRIGGERED 2')
                    // callback()
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

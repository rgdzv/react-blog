import { useCallback, useRef } from 'react'

type CallBack = (...args: any[]) => void

export function useDebounce(func: CallBack, delay: number): CallBack {
    const timer = useRef<any>(null)

    return useCallback(
        (...args: any[]) => {
            if (timer.current !== null) {
                clearTimeout(timer.current)
            }
            timer.current = setTimeout(() => {
                func(...args)
            }, delay)
        },
        [func, delay]
    )
}

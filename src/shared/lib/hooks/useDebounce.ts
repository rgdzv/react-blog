import { useCallback, useRef } from 'react'

export function useDebounce(
    func: (...args: any[]) => void,
    delay: number
): (...args: any[]) => void {
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

import { useCallback, useRef } from 'react'

type CallBack = (...args: any[]) => void

export function useThrottle(func: CallBack, delay: number): CallBack {
    const throttleRef = useRef(false)

    return useCallback(
        (...args: any[]) => {
            if (!throttleRef.current) {
                func(...args)
                throttleRef.current = true

                setTimeout(() => {
                    throttleRef.current = false
                }, delay)
            }
        },
        [func, delay]
    )
}

import { useEffect, useMemo, useState } from 'react'

export function useMediaQuery(query: string): boolean {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query])
    const [match, setMatch] = useState(mediaQuery.matches)

    useEffect(() => {
        const onChange = (): void => {
            setMatch(mediaQuery.matches)
        }
        mediaQuery.addEventListener('change', onChange)

        return () => {
            mediaQuery.removeEventListener('change', onChange)
        }
    }, [mediaQuery])

    return match
}

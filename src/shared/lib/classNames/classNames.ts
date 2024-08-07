type Mods = Record<string, boolean | string | number | undefined>

export const classNames = (
    cls: string | null,
    mods: Mods = {},
    additional: string[] = []
): string => {
    const filteredMods = Object.entries(mods)
        .filter(([className, value]) => Boolean(value))
        .map(([className]) => className)
    const filteredAdditional = [...additional.filter(Boolean)]

    const result = [cls, ...filteredAdditional, ...filteredMods].join(' ')

    return result
}

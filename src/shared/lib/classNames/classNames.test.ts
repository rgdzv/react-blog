import { classNames } from "shared/lib"

describe('classNames', () => {
    test('with only first argument', () => {
        expect(classNames('someClass')).toBe('someClass')
    })

    test('with additional class', () => {
        const expected = 'someClass class1 class2'
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected)
    })

    test('with mods (both - true)', () => {
        const expected = 'someClass class1 class2 hovered scrollable'
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2'
            ])
        ).toBe(expected)
    })

    test('with mods (1 - false)', () => {
        const expected = 'someClass class1 class2 scrollable'
        expect(
            classNames('someClass', { hovered: false, scrollable: true }, [
                'class1',
                'class2'
            ])
        ).toBe(expected)
    })

    test('with mods (1 - undefined)', () => {
        const expected = 'someClass class1 class2 scrollable'
        expect(
            classNames('someClass', { hovered: undefined, scrollable: true }, [
                'class1',
                'class2'
            ])
        ).toBe(expected)
    })
})

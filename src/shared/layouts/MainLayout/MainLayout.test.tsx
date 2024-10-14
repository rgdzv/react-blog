import { render, screen } from '@testing-library/react'
import { MainLayout } from './MainLayout'

describe('MainLayout', () => {
    test('renders sidebar, content, rightbar and toolbar', () => {
        const sidebar = <div>Sidebar content</div>
        const content = <div>Main content</div>
        const header = <div>Header content</div>
        const toolbar = <div>Toolbar content</div>

        render(
            <MainLayout
                sidebar={sidebar}
                content={content}
                header={header}
                toolbar={toolbar}
            />
        )

        expect(screen.getByText('Sidebar content')).toBeInTheDocument()
        expect(screen.getByText('Main content')).toBeInTheDocument()
        expect(screen.getByText('Header content')).toBeInTheDocument()
        expect(screen.getByText('Toolbar content')).toBeInTheDocument()
    })

    test('renders without toolbar if not provided', () => {
        const sidebar = <div>Sidebar content</div>
        const content = <div>Main content</div>
        const header = <div>Header content</div>

        render(
            <MainLayout sidebar={sidebar} content={content} header={header} />
        )

        expect(screen.queryByText('Toolbar content')).not.toBeInTheDocument()
    })
})

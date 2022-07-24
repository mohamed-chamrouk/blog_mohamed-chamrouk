import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {MemoryRouter} from 'react-router-dom'
import { App } from '../components/RoutesTree'

import RoutesTree from '../components/RoutesTree'
import {renderWithProviders} from '../utils/test-utils'

test('full app rendering/initial route', async() => {
    renderWithProviders(<RoutesTree/>)
    const user = userEvent.setup()

    expect(screen.getByText(/Mon blog personnel, centré/i)).toBeInTheDocument()
})

test('wrong route', async() => {
    const badRoute = '/bad/route'

    render(
        <MemoryRouter initialEntries={[badRoute]}>
        <App/>
        </MemoryRouter>,
    )

    expect(screen.getByText(/page non trouvée/i)).toBeInTheDocument()
})

test('about route', async() => {
    const route = '/about'

    render(
        <MemoryRouter initialEntries={[route]}>
            <App/>
        </MemoryRouter>
    )

    expect(screen.getByText(/Moi c'est mohamed chamrouk/i)).toBeInTheDocument()
})

/**
test('project route', async() => {
    const route = '/project'

    render(
        <MemoryRouter initialEntries={[route]}>
            <App/>
        </MemoryRouter>
    )

    expect(screen.getByText(/Mes projets/i)).toBeInTheDocument()
})


test('portfolio route', async() => {
    const route = '/portfolio'

    render(
        <MemoryRouter initialEntries={[route]}>
            <App/>
        </MemoryRouter>
    )

    expect(screen.getByText(/Mon portfolio/i)).toBeInTheDocument()
})*/
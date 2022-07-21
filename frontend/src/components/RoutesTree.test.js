import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import '@testing-library/jest-dom'
import {BrowserRouter, MemoryRouter} from 'react-router-dom'

import RoutesTree from './RoutesTree'
import {renderWithProviders} from '../utils/test-utils'

test('full app rendering', async() => {
    renderWithProviders(<RoutesTree/>)
    const user = userEvent.setup()

    expect(screen.getByText(/Bienvenue sur mon/i)).toBeInTheDocument()

    await user.click(screen.getByText(/Accueil/i))
    expect(screen.getByText(/Bienvenue sur mon/i)).toBeInTheDocument()
})


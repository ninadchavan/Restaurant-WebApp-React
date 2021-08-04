import React from 'react'
import CategoryDisplay from './CategoryDisplay'
import { render, screen } from '@testing-library/react';

describe("Test CategoryDisplay", () => {
    it('renders properly', () => {
        render(<CategoryDisplay />)
    })
})
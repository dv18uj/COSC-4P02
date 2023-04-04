import React from 'react';
import { render, screen } from '@testing-library/react';
import Tour from '../../pages/Tour';

describe('Tour', () => {
  test('renders', () => {
    render(<Tour />);
    const linkElement = screen.getByText(/Panorama Tour/i);
    expect(linkElement).toBeInTheDocument();
  });
});

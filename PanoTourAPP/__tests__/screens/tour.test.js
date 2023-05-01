import React from 'react';
import { render, screen } from '@testing-library/react';
import Tour from '../../pages/Tour';

/** 
 * This class tests if the Tour element will render. 
 * It scans the localhost document for a element 
 * called Panorama Tour, if this is the case
 * the Tour element has succesfully rendered. 
*/
describe('Tour', () => {
  test('renders', () => {
    render(<Tour />);
    const linkElement = screen.getByText(/Panorama Tour/i);
    expect(linkElement).toBeInTheDocument();
  });
});

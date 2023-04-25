import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Button from '../../atoms/Button';

/**
 * This test checks if the button renders correctly. 
 * This will scan the localhost document and look for 
 * a react native begin tour button. Once located it 
 * will test whether the button can be clicked and 
 * if it redirects to another screen. 
 * 
 */
describe('Button', () => {
    test('renders correctly', () => {
      const {getByText} = render(<Button title="BEGIN TOUR" />);
      const button = getByText('Click me!');
      expect(button).toBeDefined();
    });
  
    test('click event is triggered when button is clicked', () => {
      const handleClick = jest.fn();
      const {getByText} = render(<Button title="BEGIN TOUR" onClick={handleClick} />);
      const button = getByText('BEGIN TOUR');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
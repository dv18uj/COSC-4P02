import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import Button from '../../atoms/Button';


describe('Button', () => {
    test('renders correctly', () => {
      const {getByText} = render(<Button title="Click me!" />);
      const button = getByText('Click me!');
      expect(button).toBeDefined();
    });
  
    test('click event is triggered when button is clicked', () => {
      const handleClick = jest.fn();
      const {getByText} = render(<Button title="Click me!" onClick={handleClick} />);
      const button = getByText('Click me!');
      fireEvent.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });
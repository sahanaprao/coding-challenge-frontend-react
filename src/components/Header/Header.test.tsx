import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
   test('render the header',() => {
        render(<Header />);
        const headerElement = screen.getByText('Concular Market Place', {exact: true});
        expect(headerElement).toBeInTheDocument();
    })   
});

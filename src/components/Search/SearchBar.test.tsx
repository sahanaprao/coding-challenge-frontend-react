import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Header Component', () => {
   test('render the null',() => {
        const { container } = render(<SearchBar />);
        const inputElement = container.querySelector('input');
        expect(inputElement).toBeNull();
    })   
});
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import SearchBar from './components/Search/SearchBar';

describe('App component', () => {
    test('renders main section', () => {
        const { container } = render(<App />);
        const mainElement = container.querySelector('main');
        expect(mainElement).toBeInTheDocument();
    });

});
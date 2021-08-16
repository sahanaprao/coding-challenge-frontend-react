import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main section', () => {
    const { container } = render(<App />);
    const mainElement = container.querySelector('main');
    expect(mainElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductItem from './ProductItem';

describe('Header Component', () => {
   test('render the img Element',() => {
       const data = {
           images: [
               { object_url : ''}
           ],
           product_name: ''
       }
        render(<ProductItem product={data}/>);
        const imgElement = screen.getByRole('img');
        expect(imgElement).toBeInTheDocument();
    })   
});
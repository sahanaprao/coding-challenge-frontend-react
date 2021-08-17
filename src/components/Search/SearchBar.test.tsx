import React from 'react';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';
import ProductProvider from '../../store/ProductProvider';

describe('Header Component', () => {
   test('Render the null',() => {
        const { container } = render(<SearchBar />);
        const inputElement = container.querySelector('input');
        expect(inputElement).toBeNull();
    })
    
    test("Render Input", async() => {
        const product = {
                            products:[
                            ],
                            originalProducts:[],
                            status:'',
                            error:'',
                            meta: { cursor :0 , hasMoreData: true },
                            searchKey:''
                        };
        const wrapper = render(
            <ProductProvider value={product}>
                <SearchBar />
            </ProductProvider>
        );
        
        const input = await screen.findByPlaceholderText('Search by product name');
        expect(input).toBeInTheDocument();
    });     
});
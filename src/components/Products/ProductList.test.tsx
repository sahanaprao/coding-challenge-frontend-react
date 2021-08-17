import ProductProvider from '../../store/ProductProvider';
import ProductList from './ProductList';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'

describe('ProductList component', () =>{
    
    test("ProductList has next Button", async() => {
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
            <ProductList />
            </ProductProvider>
        );
        const button = await screen.findByRole('button',{ name: /next/i});
        expect(button).toBeInTheDocument();
    });  


    test("ProductList next button Is clicked", async() => {
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
            <ProductList />
            </ProductProvider>
        );
        const button = await screen.findByRole('button',{ name: /next/i});

        expect(fireEvent.click(button)).toBeTruthy();
    });   
    
})

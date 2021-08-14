import React, { useReducer } from 'react';

import { ProductcontextObj } from '../models/interfaces';

import ProductContext from './product-context';

import { State,  Action } from '../models/interfaces';

const defaultProductState: ProductcontextObj = {
    products: [],
    searchKey: ''
}

const productReducer = (state: State, action: Action) => {
    if(action.type === 'SEARCH') {
        
        // const filteredProducts = state.products.filter((product) => product.product_name.toLowerCase() === action.searchKey.toLowerCase())
        
        // return {
        //     products: filteredProducts,
        //     searchKey: state.searchKey
        // }
    } 
    return defaultProductState;
}

const ProductProvider:React.FC = (props) => {

    const [ productState, dispaltchProductAction ] = useReducer(productReducer, {
        products:[],
        searchKey:''
        });

    const searchProduct = (text: string) => {
        dispaltchProductAction({type: 'SEARCH',text:text});
    }

    const context = {
        products: productState.products,
        searchKey : productState.searchKey,
        searchProduct : searchProduct
    }

    return (
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;

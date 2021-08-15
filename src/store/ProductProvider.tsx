import React, { useReducer, useEffect } from 'react';

import { ProductcontextObj } from '../models/interfaces';

import ProductContext from './product-context';

import { State,  Action } from '../models/interfaces';

import { getAllProducts } from '../lib/api';

const defaultProductState: ProductcontextObj = {
    products: [],
    originalProducts:[],
    searchKey: ''
}

const productReducer = (state: State, action: Action) => {
    if(action.type === 'SEARCH') {
        const filteredProducts = state.originalProducts.filter((product) => product.product_name.toLowerCase().includes(action.text.toLowerCase()))
       
        return {
            products: filteredProducts,
            originalProducts: state.originalProducts,
            searchKey: action.text
        }
    } else if(action.type === 'SET') {
        return {
            products: action.products,
            originalProducts: action.products,
            searchKey: state.searchKey
        }
    }
    return defaultProductState;
}

const ProductProvider:React.FC = (props) => {

    useEffect(() => {
        const fetchProducts = async() => {
            const requestBody: requestBody = {
                "cursor": 0,
                "limit": 10 
            };

            const data= await getAllProducts(requestBody);

            dispaltchProductAction({type: 'SET',products:data.data.data});
        }

        fetchProducts();
    
    },[]);

    const [ productState, dispaltchProductAction ] = useReducer(productReducer, {
        products:[],
        originalProducts:[],
        searchKey:''
        });

    const searchProduct = (text: string) => {
        dispaltchProductAction({type: 'SEARCH',text:text});
    }
    
    const setProducts = () => {
        dispaltchProductAction({type: 'SET',products:initialProducts});
    } 

    const context = {
        products: productState.products,
        originalProducts: productState.products,
        searchKey : productState.searchKey,
        searchProduct : searchProduct,
        setProducts: setProducts
    }

    return (
        <ProductContext.Provider value={context}>
            {props.children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;

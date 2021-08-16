import React, { useReducer, useEffect } from 'react';

import { ProductcontextObj } from '../models/interfaces';

import ProductContext from './product-context';

import { State,  Action } from '../models/interfaces';
import { Product } from '../lib/api';

import { getAllProducts } from '../lib/api';

const defaultProductState: ProductcontextObj = {
    products: [],
    originalProducts:[],
    searchKey: '',
    status: '',
    error: '',
    meta: { cursor :0 , hasMoreData: true }
}

const productReducer = (state: State, action: Action) => {
    if(action.type === 'SEARCH') {
        const filteredProducts = state.originalProducts.filter((product) => product.product_name.toLowerCase().includes(action.text.toLowerCase()))
       
        return {
            products: filteredProducts,
            originalProducts: state.originalProducts,
            meta: state.meta,
            searchKey: action.text
        }
    } else if(action.type === 'SET') {
        return {
            products: action.products,
            originalProducts: action.products,
            meta: action.meta,
            searchKey: state.searchKey,
            error: action.error,
            status: action.status
        }
    }
    return defaultProductState;
}

const ProductProvider:React.FC = (props) => {

    useEffect(() => {

        const fetchProducts = async() => {
            const requestBody: requestBody = {
                cursor: 0,
                limit: 10 
            };

            return  await getAllProducts(requestBody);
        }

        const getProducts = async () => {
            dispaltchProductAction({ type:'SET', status: 'PENDING' , products:[], meta: {}});
            try {
                const responseData = await fetchProducts();

                dispaltchProductAction({ type: 'SET', status: 'SUCCESS',products:responseData.data.data, meta: responseData.data.meta });
            } catch (error) {
                dispaltchProductAction({
                    type: 'SET',
                status: 'ERROR',
                errorMessage: error.message || 'Something went wrong!',
                products:[], meta: {}
                });
            }
        }

        getProducts();
    
    },[]);

    const [ productState, dispaltchProductAction ] = useReducer(productReducer, {
        products:[],
        originalProducts:[],
        status:'',
        error:'',
        meta: { cursor :0 , hasMoreData: true },
        searchKey:''
        });

    const searchProduct = (text: string) => {
        dispaltchProductAction({type: 'SEARCH',text:text});
    }
    
    const setProducts = (products: Product, meta: Meta, status: string, error: string) => {
        dispaltchProductAction({type: 'SET',products:products, meta: meta, status: status, error: error});
    } 

    const context = {
        products: productState.products,
        originalProducts: productState.products,
        status:productState.status,
        error: productState.error,
        meta: productState.meta,
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

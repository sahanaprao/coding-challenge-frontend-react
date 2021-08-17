import React, { useReducer, useEffect } from 'react';

import ProductContext from './product-context';
import { ProductcontextObj, State,  Action , RequestBody} from '../models/interfaces';
import { PRDOUCT_LIMIT } from '../models/products';
import { Product, Meta } from '../models/products';
import { getAllProducts } from '../lib/api';

const defaultProductState: ProductcontextObj = {
    products: [],
    originalProducts:[],
    searchKey: '',
    status: '',
    error: '',
    meta: { cursor :0 , hasMoreData: true },
    searchProduct: (text: string) => {},
    setProducts: (product: Product[], meta: Meta, status: string, error: string) => {}
}

export const productReducer = (state: State, action: Action) => {
    if(action.type === 'SEARCH') {
        const filteredProducts = state.originalProducts.filter((product) => product.product_name.toLowerCase().includes(action.searchKey.toLowerCase()))
       
        return {
            products: filteredProducts,
            originalProducts: state.originalProducts,
            meta: state.meta,
            searchKey: action.searchKey,
            error: state.error,
            status: state.status
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
            const requestBody: RequestBody = {
                cursor: 0,
                limit: PRDOUCT_LIMIT
            };

            return  await getAllProducts(requestBody);
        }

        const getProducts = async () => {
            dispatchAction({ 
                type:'SET', 
                status: 'PENDING' , 
                products:[], 
                originalProducts: [], 
                meta: {cursor:0, hasMoreData:  true}, 
                error: '', 
                searchKey:''
            });
            try {
                const responseData = await fetchProducts();

                dispatchAction({
                     type: 'SET', 
                     status: 'SUCCESS',
                     products: responseData.data.data, 
                     originalProducts: responseData.data.data, 
                     meta: responseData.data.meta,
                     error:'',
                     searchKey:''
                });
            } catch (error) {
                dispatchAction({
                    type: 'SET',
                    status: 'ERROR',
                    error: error.message || 'Something went wrong!',
                    products:[], 
                    originalProducts: [],  
                    meta: {cursor:0, hasMoreData:  true},
                    searchKey:''
                });
            }
        }

        getProducts();
    
    },[]);

    const [ productState, dispatchAction ] = useReducer(productReducer, 
                                                {
                                                    products:[],
                                                    originalProducts:[],
                                                    status:'',
                                                    error:'',
                                                    meta: { cursor :0 , hasMoreData: true },
                                                    searchKey:''
                                                });

    const searchProduct = (text: string) => {
        dispatchAction({
            type: 'SEARCH',
            searchKey:text,
            status: '',
            error: '',
            products: [],
            meta: {cursor:0, hasMoreData:  true},
            originalProducts: []
        });
    }
    
    const setProducts = (products: Product[], meta: Meta, status: string, error: string) => {
        dispatchAction({
            type: 'SET',
            searchKey: '',
            products:products, 
            originalProducts: products,
            meta: meta, 
            status: status, 
            error: error
        });
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

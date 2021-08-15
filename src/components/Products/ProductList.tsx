import React,{ useEffect } from 'react';

import ProductItem from './ProductItem';

import classes from './ProductList.module.css';

import { getAllProducts } from '../../lib/api';
import useHttp from '../../hooks/useHttp';
import { requestBody } from '../../models/interfaces';

const ProductList = () => {

    const { sendRequest , status , data: LoadedProducts, error} = useHttp(getAllProducts, true);

    useEffect(() => {
    const requestBody: requestBody = {
        "cursor": 0,
        "limit": 2 
    };
        sendRequest(requestBody);
    },[sendRequest]);

    if(status === 'pending') {
         return (
            <div>

            </div>
        );
    }

    if(status === 'completed') {
      return <div className={classes.container}>
        { LoadedProducts.data.data.map((product) => <ProductItem product={product} key={product.id}/> )}
    </div>
    }

    return (
       <div></div>
    );
}

export default ProductList;
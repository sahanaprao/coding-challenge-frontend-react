import React,{ useEffect } from 'react';

import ProductItem from './ProductItem';

import classes from './ProductList.module.css';

import { getAllProducts } from '../../lib/api';
import useHttp from '../../hooks/useHttp';
import { requestBody } from '../../models/interfaces';

const ProductList = () => {

    const { sendRequest , status , data, error} = useHttp(getAllProducts, true);

    useEffect(() => {
    const requestBody: requestBody = {
        "cursor": 0,
        "limit": 2 
    };
        sendRequest(requestBody);
    },[sendRequest]);

    return (
    <div className={classes.clear}>
        <ProductItem />
    </div>   
    );
}

export default ProductList;
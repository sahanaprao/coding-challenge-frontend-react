import React,{ useEffect, useContext } from 'react';

import ProductItem from './ProductItem';

import classes from './ProductList.module.css';

import { getAllProducts } from '../../lib/api';
import useHttp from '../../hooks/useHttp';
import { requestBody } from '../../models/interfaces';
import ProductContext from '../../store/product-context';


const ProductList = () => {

    const productCtx = useContext(ProductContext);

    return (
       <div className={classes.container}>
        { productCtx.products.map((product) => <ProductItem product={product} key={product.id}/> )}
       </div>
    );
}

export default ProductList;
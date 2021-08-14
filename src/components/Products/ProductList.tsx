import React from 'react';

import ProductItem from './ProductItem';

import classes from './ProductList.module.css';

const ProductList = () => {
    return (
    <div className={classes.clear}>
        <ProductItem />
    </div>   
    );
}

export default ProductList;
import React,{ useContext } from 'react';

import ProductItem from './ProductItem';

import classes from './ProductList.module.css';
import ProductContext from '../../store/product-context';


const ProductList = () => {

    const productCtx = useContext(ProductContext);

    if(!productCtx.products.length) {
        return (
                <div className={`${classes.container} ${classes.noProducts}`}>
                    <p className={classes.centered}>No data available</p>
                </div>
        );
    } 

    return (
       <div className={classes.container}>
            { productCtx.products.map((product) => <ProductItem product={product} key={product.id}/> )}
       </div>
    );
}

export default ProductList;
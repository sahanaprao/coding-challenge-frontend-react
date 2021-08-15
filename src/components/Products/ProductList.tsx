import React,{ useContext } from 'react';

import ProductItem from './ProductItem';

import classes from './ProductList.module.css';
import ProductContext from '../../store/product-context';

import { getAllProducts } from '../../lib/api';

const ProductList = () => {

    const productCtx = useContext(ProductContext);

    const hasMoreData = productCtx.meta.hasMoreData;
    const hasCursor = !productCtx.meta.cursor;

    const fetchProducts = async() => {
        const requestBody: requestBody = {
            cursor: productCtx.meta.cursor,
            limit: 10 
        };

        const data= await getAllProducts(requestBody);
        productCtx.setProducts(data.data.data, data.data.meta);
    }


    const onPrevious = () => {
        fetchProducts();
    }

    const onNext = () => {
        fetchProducts();
    }


    if(!productCtx.products.length) {
        return (
                <div className={`${classes.container} ${classes.noProducts}`}>
                    <p className={classes.centered}>No data available</p>
                </div>
        );
    } 

    return (
        <React.Fragment>
            <div className={classes.container}>
                { productCtx.products.map((product) => <ProductItem product={product} key={product.id}/> )}
            </div>
            <div className={classes.buttons}>
                <button className={classes.prevBtn} onClick={onPrevious} disabled={!hasCursor}>Previous</button>
                <button onClick={onNext} disabled={!hasMoreData}>Next</button>
            </div>
        </React.Fragment>
    );
}

export default ProductList;
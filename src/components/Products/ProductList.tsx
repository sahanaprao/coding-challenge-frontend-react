import React,{ useContext } from 'react';

import ProductItem from './ProductItem';
import LoadingSpinner from '../UI/Spinner/LoadingSpinner';

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

        return await getAllProducts(requestBody);
    }

    const getProducts = async () => {
        productCtx.setProducts([], {}, 'PENDING'); 
        try {
            const responseData = await fetchProducts();
            productCtx.setProducts(responseData.data.data, responseData.data.meta, 'SUCCESS' ); 
        } catch (error) {
            productCtx.setProducts([], {}, 'ERRPR', error.message || 'Something went wrong!' ); 
        }
    }

    const onPrevious = () => {
        getProducts();
    }

    const onNext = () => {
        getProducts();
    }

    if(productCtx.status === 'PENDING') {
        console.log(productCtx.status);
        return (
            <div className={classes.loadingCentered}>
                <LoadingSpinner />
            </div>
        ); 
    }

    if(productCtx.status === 'completed' && !productCtx.products.length) {
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
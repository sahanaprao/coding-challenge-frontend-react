import React,{ useContext } from 'react';

import ProductItem from './ProductItem';
import LoadingSpinner from '../UI/Spinner/LoadingSpinner';
import ProductContext from '../../store/product-context';
import { getAllProducts } from '../../lib/api';
import { RequestBody } from '../../models/interfaces';
import { PRDOUCT_LIMIT } from '../../models/products';

import classes from './ProductList.module.css';

const ProductList = () => {

    const productCtx = useContext(ProductContext);

    const hasMoreData = productCtx.meta.hasMoreData;
    const hasCursor = !productCtx.meta.cursor;

    const fetchProducts = async() => {

        const requestBody: RequestBody = {
            cursor: productCtx.meta.cursor,
            limit: PRDOUCT_LIMIT
        };

        return await getAllProducts(requestBody);
    }

    const getProducts = async () => {

        productCtx.setProducts([], {cursor:0, hasMoreData:  true}, 'PENDING',''); 
        
        try {
            const responseData = await fetchProducts();
            productCtx.setProducts(responseData.data.data, responseData.data.meta, 'SUCCESS','' ); 
        } catch (error) {
            productCtx.setProducts([], {cursor:0, hasMoreData:  true}, 'ERROR', error.message || 'Something went wrong!' ); 
        }
    }

    const onPrevNext = () => {
        getProducts();
    }

    if(productCtx.status === 'PENDING') {
        return (
            <div className={classes.loadingCentered}>
                <LoadingSpinner />
            </div>
        ); 
    }

    if((productCtx.status === 'SUCCESS' && !productCtx.products.length) ||  (productCtx.searchKey && !productCtx.products.length)) {
        return (
                <div className={`${classes.container} ${classes.noProducts}`}>
                    <p className={classes.centered}>No data available</p>
                </div>
        );
    }

    if(productCtx.status === 'ERROR') {
        return (
                <div className={`${classes.container} ${classes.noProducts}`}>
                    <p className={classes.centered}>{productCtx.error}</p>
                </div>
            );
    } 

    return (
        <React.Fragment>
            <div className={classes.container}>
                { productCtx.products.map((product) => <ProductItem product={product} key={product.id}/> )}
            </div>
            { 
                productCtx.products.length ?
                    <div className={classes.buttons} >
                        <button className={classes.prevBtn} onClick={onPrevNext} disabled={!hasCursor ||  ( productCtx.products!.length < 9 && !!productCtx.searchKey)}>Previous</button>
                        <button onClick={onPrevNext} disabled={!hasMoreData ||  ( productCtx.products.length < 9 && !!productCtx.searchKey)}>Next</button>
                    </div> : null
            }
        </React.Fragment>
    );
}

export default ProductList;
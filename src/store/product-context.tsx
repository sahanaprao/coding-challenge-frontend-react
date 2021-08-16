import React from 'react';

import { ProductcontextObj } from '../models/interfaces';
import { Product, Meta } from '../models/products';

const ProductContext = React.createContext<ProductcontextObj>({
    products: [],
    originalProducts: [],
    searchKey: '',
    error: '',
    status: '',
    meta: { cursor: 0, hasMoreData: true},
    searchProduct: (text: string) => {},
    setProducts: (product: Product[], meta: Meta, status: string, error: string) => {}
})

export default ProductContext;
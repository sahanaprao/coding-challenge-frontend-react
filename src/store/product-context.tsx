import React from 'react';

import { ProductcontextObj } from '../models/interfaces';

const ProductContext = React.createContext<ProductcontextObj>({
    products: [],
    originalProducts: [],
    searchKey: '',
    cursor: 0,
    searchProduct: (text: string) => {},
    setProducts: () => {}
})

export default ProductContext;
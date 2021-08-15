import React from 'react';

import { ProductcontextObj } from '../models/interfaces';

const ProductContext = React.createContext<ProductcontextObj>({
    products: [],
    searchKey: '',
    searchProduct: (text: string) => {}
})

export default ProductContext;
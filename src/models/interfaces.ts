import { Meta, Product } from './products';

export interface RequestBody {
    cursor: number
    limit: number
}

export type ProductAction =  {
    type: 'SEND'
} | {
    responseData: any,
    type: 'SUCCESS'
} | {
    errorMessage: string,
    type: 'ERROR'
}

export interface State {
    products: Product[],
    originalProducts: Product[],
    meta: Meta,
    searchKey: string,
    error: string,
    status: string
}

export type Action = {
    products: Product[],
    originalProducts: Product[],
    meta: Meta,
    searchKey: string,
    error: string,
    status: string,
    type: 'SEARCH'
} | {
    products: Product[],
    originalProducts: Product[],
    meta: Meta,
    searchKey: string,
    error: string,
    status: string,
    type: 'SET'
} 
 
export interface ProductcontextObj {
    products: Product[],
    originalProducts: Product[],
    error: string,
    searchKey: string,
    meta: Meta,
    status: string,
    searchProduct: (text: string) => void,
    setProducts: (product: Product[], meta: Meta, status: string, error: string) => void
};
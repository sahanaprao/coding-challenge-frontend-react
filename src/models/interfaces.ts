export interface ProductState {

}

export interface requestBody {
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
    products: any[]
}

export type Action = {
    type: 'SEARCH',
    text: string
}

export interface ProductcontextObj {
    products: any[],
    searchKey: string,
    searchProduct?: (text: string) => void 
};
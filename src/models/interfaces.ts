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
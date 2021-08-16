export const PRDOUCT_LIMIT = 10;

export interface Image {
    uid: string;
    file_name: string;
    file_path: string;
    object_url: string;
    bucket_name: string;
}

export interface Product {
    id: number;
    product_name: string;
    images: Image[];
    [prop: string]: any;
}

export interface Meta {
    hasMoreData: boolean;
    cursor: number;
}

export interface Data {
    data: Product[];
    meta: Meta;
}

export interface Response {
    statusCode: number;
    requestId: string;
    status: string;
    logStreamName: string;
    data: Data;
}
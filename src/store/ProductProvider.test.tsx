import { renderHook } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import { productReducer } from './ProductProvider';
import TestRenderer from 'react-test-renderer';
      
const {act} = TestRenderer;

it('should render hook ProductReducer', () => {

    const product = {
                        products:[],
                        originalProducts:[],
                        status:'',
                        error:'',
                        meta: { cursor :0 , hasMoreData: true },
                        searchKey:''
                    }
    act(() => {

        const { result, rerender } = renderHook(() => useReducer(productReducer, product));

        rerender();
    });
});


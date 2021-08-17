import { renderHook } from '@testing-library/react-hooks';
import { useReducer } from 'react';
import { productReducer } from './ProductProvider';

it('should dispatch SET action', () => {

    const product = {
                        products:[],
                        originalProducts:[],
                        status:'',
                        error:'',
                        meta: { cursor :0 , hasMoreData: true },
                        searchKey:''
                    }

    const { result } = renderHook(() => useReducer(productReducer, product));
  
    const [state, dispatch] = result.current;
    
    dispatch({type: 'SET', newState: product});

    expect(state).toEqual(product);
});


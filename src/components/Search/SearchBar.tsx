import { useRef, useContext } from 'react';

import ProductContext from '../../store/product-context';

import classes from './SearchBar.module.css';

const SearchBar = () => {

    const productCtx = useContext(ProductContext);

    const searchInput  = useRef<HTMLInputElement>(null);

    const searchHandler = () => {
        productCtx.searchProduct(searchInput.current!.value);
    }

    return (
        <div>
            <input type="text" placeholder="Search by product name" className={classes.searchInput} ref={searchInput} onInput={searchHandler}/>
        </div>
    );
}

export default SearchBar;
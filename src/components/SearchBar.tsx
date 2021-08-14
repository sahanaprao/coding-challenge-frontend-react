import { useRef } from 'react';

import classes from './SearchBar.module.css';

const SearchBar = () => {
    const searchInput  = useRef<HTMLInputElement>(null);
    return (
        <div>
            <input type="text" placeholder="Search by product name" className={classes.searchInput} ref={searchInput} />
        </div>
    );
}

export default SearchBar;
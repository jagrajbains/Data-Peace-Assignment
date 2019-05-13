import React from 'react';

const SearchBox = ({searchField, onSearchChange}) => (
    <div>
        <input 
        type='search' 
        placeholder='Search By First Name..' 
        onChange={onSearchChange} />
    </div>
);

export default SearchBox;
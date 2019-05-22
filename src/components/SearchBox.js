import React from 'react';

const SearchBox = ({ onSearchChange }) => (
    <div className='searchBox'>
        <input 
            className='searchBox__input'
            type='search'
            placeholder='Search By First Name..'
            onChange={onSearchChange} />
    </div>
);

export default SearchBox;
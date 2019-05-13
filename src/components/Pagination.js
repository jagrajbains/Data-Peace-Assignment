import React from 'react';

const Pagination = (props) => (
    <div>
        {props.pageNumbers.map((page) => {
            return <button key={page} id={page} onClick={props.onPageChange}>{page}</button>
        })}
    </div>
)

export default Pagination;
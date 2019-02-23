import React from 'react';
import './Search.css'

const Search = ({handleSearch}) => {
    return(
        <div className="phone-search">
            <input className="phone-search-input" placeholder="이름으로 검색" onChange={handleSearch}/>
        </div>
    )
}

export default Search;
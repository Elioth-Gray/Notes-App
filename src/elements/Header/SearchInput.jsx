import React from "react";

function SearchInput({label, placeholder, onSearch}){

    return(
        <form action="">
            <label htmlFor="filter">{label}</label>
            <input type="text" className='border mx-6 rounded-md p-2 border-black' placeholder={placeholder} onChange={onSearch}/>
        </form>
    )

}

export default SearchInput
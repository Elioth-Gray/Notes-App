import React from "react";
import SearchInput from "./SearchInput";

function HeaderElement({title, label, placeholder, onSearch}){

    return(
        <div className='w-full flex flex-row justify-between items-center py-4'>
            <h1 className='text-2xl font-bold'>
                {title}
            </h1>
            <SearchInput label={label} placeholder={placeholder} onSearch={onSearch} />
        </div>
    )

}

export default HeaderElement
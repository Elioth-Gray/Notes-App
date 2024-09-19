import React from 'react'
import HeaderElement from '../elements/Header/HeaderElement';

function Header({title, label, placeholder, onSearch}){
  return(
    <section className='container mx-auto border-b-2 border-black'>
        <HeaderElement title={title} label={label} placeholder={placeholder} onSearch={onSearch}></HeaderElement>
    </section>
  )
}

export default Header;
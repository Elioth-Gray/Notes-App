import React from "react";
import InputForm from "./InputForm";

function FormElement({title, label, onSubmit}){

    return(
        <div className='w-full flex justify-center items-center'>
          <div className='flex flex-col w-1/3 gap-3'>
            <h1 className='text-lg font-semibold'>{title}</h1>
            <InputForm label = {label} onSubmit={onSubmit}></InputForm>
          </div>
        </div>
    )

}

export default FormElement
import React from "react";
import FormElement from "../elements/CreateForm/FormElement";

function CreateForm({title, label, onSubmit}){

    return(
    <section className='container mx-auto mt-5'>
        <FormElement title={title} label={label} onSubmit={onSubmit}></FormElement>
    </section>
    )

}

export default CreateForm;
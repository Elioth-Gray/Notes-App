    import React from "react";
    import NotesElement from "../elements/NotesSection/NotesElement";

    function NotesSection({title, data, type, onArchive, onDelete}){

        return(
            <section className='container mx-auto mt-7'>
                <NotesElement title={title} data = {data} type={type} onDelete={onDelete} onArchive={onArchive}></NotesElement>
            </section>
        )
         
        
        
    }

    export default NotesSection
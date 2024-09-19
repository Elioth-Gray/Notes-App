import React from "react";
import NotesCard from "./NotesCard";
import { showFormattedDate } from "../../utils/data";

function NotesElement({title, data, type, onArchive, onDelete}){

    return(
        <div className='w-full flex flex-col gap-8'>
            <div className='w-full'>
                <h1 className='text-xl font-semibold'>{title}</h1>
            </div>
            <div className="w-full flex flex-row flex-wrap gap-4">
            {data.map((note) => {
                return( <NotesCard id={note.id} title={note.title} body={note.body} createdAt={showFormattedDate(note.createdAt)} type={type} onDelete={onDelete} onArchive={onArchive}></NotesCard>)
            })}
            </div>
        </div>
    )

}

export default NotesElement
import React from "react";

function NotesCard({id, title, body, createdAt, type, onArchive, onDelete}){

    return(
            <div className='flex flex-col w-72 p-2 px-3 border border-black rounded-md gap-3 justify-between' id={id}>
                <div>
                    <h1>{title}</h1>
                    <p className='text-sm'>{createdAt}</p>
                    <p className="py-3">{body}</p>
                </div>
                <div className='flex flex-row justify-between items-center gap-7'>
                    <button className='w-1/2 text-yellow-500 font-semibold rounded-lg' onClick={() => onArchive(id)}>{type === "note" ? "Arsip" : "Kembalikan"}</button>
                    <button className='w-1/2 p-2 text-red-500 font-semibold rounded-lg' onClick={() => onDelete(id)}>Hapus</button>
                </div>
            </div>
    )

}

export default NotesCard;
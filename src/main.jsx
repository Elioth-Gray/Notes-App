import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import Header from './components/Header.jsx'
import CreateForm from './components/CreateForm'
import NotesSection from './components/NotesSection'
import { getInitialData } from './utils/data'

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: getInitialData(),
      search: ""
    };

    this.onHandleArchiveNote = this.onHandleArchiveNote.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNotes = this.onAddNotes.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onHandleArchiveNote(id) {
    this.setState((prevState) => {
      return {
        data: prevState.data.map(data => 
          data.id === id ? { ...data, archived: !data.archived } : data
        )
      };
    });
  }

  onDeleteHandler(id) {
    const data = this.state.data.filter(data => data.id !== id);
    this.setState({ data });
  }

  onAddNotes({ title, body }) {
    this.setState((prevState) => {
      return {
        data: [...prevState.data, {
          id: +new Date(),
          title,
          body,
          createdAt: +new Date(),
          archived: false
        }]
      };
    });
  }

  onSearch(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    const { data, search } = this.state;

    const filteredNotes = data.filter(note => 
      !note.archived && note.title.toLowerCase().includes(search.trim().toLowerCase())
    );

    const filteredArchivedNotes = data.filter(note => 
      note.archived && note.title.toLowerCase().includes(search.trim().toLowerCase())
    );

    return (
      <>
        <Header title="Elioth Notes" label="Cari Catatan" placeholder="Nama Buku...." onSearch={this.onSearch} />
        <CreateForm title="Buat Catatan" label="Sisa Karakter: " onSubmit={this.onAddNotes} />
        <NotesSection title="Catatan Anda" data={filteredNotes} type="note" onDelete={this.onDeleteHandler} onArchive={this.onHandleArchiveNote} />
        <NotesSection title="Catatan Arsip" data={filteredArchivedNotes} type="archive" onDelete={this.onDeleteHandler} onArchive={this.onHandleArchiveNote} />
      </>
    );
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NotesApp />
  </StrictMode>,
)

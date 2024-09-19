import React from "react";

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "",
            body: "",
            maxChars: 50,
        }
       
        this.onTitleChange = this.onTitleChange.bind(this)
        this.onBodyChange = this.onBodyChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onTitleChange(event) {
        this.setState(() => {
          return {
            title: event.target.value,
          }
        });
      }
      
      onBodyChange(event) {
        const { maxChars } = this.state;
        const newBody = event.target.value;

        if (newBody.length <= maxChars) {
            this.setState({ body: newBody });
            this.props.onBodyChange(newBody); 
        }
    }
      
      onSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(this.state);
      }


    render() {
        return (
            <form className='flex flex-col gap-4' onSubmit={this.onSubmit}>
                <input type="text" placeholder='Ini adalah judul.....' className='border border-black w-full p-2 rounded-md' value={this.state.title} onChange={this.onTitleChange}/>
                <textarea placeholder='Tuliskan catatanmu di sini.....'className='border border-black p-2 rounded-md h-52 text-start w-full' value={this.state.body} onChange={this.onBodyChange}/>
                <button type='submit' className='bg-black p-2 py-3 text-white rounded-md'>Tambah Catatan</button>
            </form>
        );
    }
}

export default NoteForm;

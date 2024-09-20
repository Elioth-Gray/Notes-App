import React from "react";
import NoteForm from "./NoteForm";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            maxChars: 50,
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
    }

    handleTitleChange(newTitle) {
        this.setState({ title: newTitle });
    }

    render() {
        const { label, onSubmit } = this.props;
        const { title, maxChars } = this.state;
        const remainingChars = maxChars - title.replace(/\s/g, '').length; 

        return (
            <div className='flex flex-col gap-3'>
                <p className='text-end'>{label} {remainingChars}</p>
                <NoteForm onSubmit={onSubmit} onTitleChange={this.handleTitleChange} />
            </div>
        );
    }
}

export default InputForm;

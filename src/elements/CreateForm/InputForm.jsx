import React from "react";
import NoteForm from "./NoteForm";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            maxChars: 50,
        };
        this.handleBodyChange = this.handleBodyChange.bind(this);
    }

    handleBodyChange(newBody) {
        this.setState({ body: newBody });
    }

    render() {
        const { label, onSubmit } = this.props;
        const { body, maxChars } = this.state;
        const remainingChars = maxChars - body.replace(/\s/g, '').length; 

        return (
            <div className='flex flex-col gap-3'>
                <p className='text-end'>{label} {remainingChars}</p>
                <NoteForm onSubmit={onSubmit} onBodyChange={this.handleBodyChange} />
            </div>
        );
    }
}

export default InputForm;

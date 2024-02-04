import React, { useState } from 'react';
import './App.css';

// functional component version of Note

const Note2 = (props) => {
    // state variable boolean "editing"
    const [editing, setEditing] = useState(false);

    // newNoteName and newNoteText state and functions same as those on the initial create! 
    const [newNoteName, setNewNoteName] = useState('');
    const [newNoteText, setNewNoteText] = useState('');

    // these functions help with what is called controlled inputs!
    const newNoteNameFunction = (event) => {
        setNewNoteName(event.target.value);
    }

    const newNoteTextFunction = (event) => {
        setNewNoteText(event.target.value);
    }

    // in this case we DO want to make a separate function instead of just using an anonymous one, 
    // because we want to do multiple things in this function
    const saveNote = (event) => {
        // using edit callback function from props
        props.edit(props.id, newNoteName, newNoteText)
        setEditing(false)
    }


    // conditional rendering

    // if not editing, just display note
    if (editing === false) {
        return (
            <div className="note">
                <p>{props.name}</p>
                <p>{props.text}</p>
                <button onClick={() => (props.delete(props.id))}>delete</button>
                <button onClick={() => setEditing(true)}>edit</button>
            </div>
        )
    }

    else {
        return (
            <div className="note">
             <p>enter title:</p>
                <input type="text" value={newNoteName} onChange={newNoteNameFunction} />

            <p>enter text:</p>
                <input type="text" value={newNoteText} onChange={newNoteTextFunction} />
            <button onClick={saveNote}>save</button>
            </div>
        )
    }
    
}

export default Note2;
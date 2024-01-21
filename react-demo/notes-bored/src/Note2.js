import React from 'react';
import './App.css';



const Note2 = (props) => {


    // using callback function from props!
    const deleteNote = () => {
        props.delete(props.id)
    }

    return (
        <div className="note">
        <p>{props.name}</p>
        <p>{props.text}</p>
        <button onClick={deleteNote}>delete</button>
        </div>
    )
}

export default Note2;
import React, { useState } from 'react';
import './App.css';
import Note2 from './Note2';
const NoteBoard2 = (props) => {
    const [notes, setNotes] = useState([]);
    const [noteID, setNoteID] = useState(0);
    const [newNoteName, setNewNoteName] = useState('');
    const [newNoteText, setNewNoteText] = useState('');
   
    const newNoteNameFunction = (event) => {
        setNewNoteName(event.target.value);
    }

    const newNoteTextFunction = (event) => {
        setNewNoteText(event.target.value);
    }


    const saveNoteInfo = () => {
        // new syntax!
        setNotes([...notes, { id: noteID, name: newNoteName, text: newNoteText }]);
        
        setNoteID((i) => i + 1)

    }

    
    const allNotes = notes.map((note) => {
        return (
            <Note2
                name={note.name}
                text={note.text}
                id={note.id}
                key={note.id}
            />
            );
        }
    );

    


   return (
     <div>
       <p> this is the a note board! </p>
       <p>add a new note below!</p>
       <p>enter title:</p>
        <input type="text" value={newNoteName} onChange={newNoteNameFunction} />

        <p>enter text:</p>
        <input type="text" value={newNoteText} onChange={newNoteTextFunction} />
       <button onClick={saveNoteInfo}>Save!</button>

        <div className="notes-flex">
          {allNotes}
        </div>
       

     </div>
   );
 }

export default NoteBoard2;
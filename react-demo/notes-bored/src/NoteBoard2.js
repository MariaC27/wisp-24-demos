import React, { useEffect, useState } from 'react';
import './App.css';
import Note2 from './Note2';
import { addNewNote, deleteNote, updateNote, getAllNotes } from './services/datastore';

// functional component version of NoteBoard

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


    // a useEffect hook! Gets the data each time the page loads
    useEffect(() => {
      getAllNotes((notes_list) => {
        setNotes(notes_list)
      })
    });


    // saves a NEW note!
    const saveNoteInfo = () => {
        // OLD (without firebase)
        // setNotes([...notes, { id: noteID, name: newNoteName, text: newNoteText }]);

        // NEW (with firebase)
        addNewNote(noteID, newNoteName, newNoteText);
        
        setNoteID((i) => i + 1);
        // still want to keep storing noteID in state so can increment!

    }

    // callback function
    const delNote  = (id) => {
        // OLD (without firebase)
        // setNotes(notes.filter((i) => i.id !== id));

        // NEW (with firebase)
        deleteNote(id);
    }

    //callback function to change name and text of specific note
    const editNote = (id, newName, newText) => {

        // OLD (WITHOUT FIREBASE)
        // JS concept of IMMUTABILITY: need to create a copy of the array and set that as the 
        // new note state, can't "mutate" the old state array in place!
        // const newNotes = notes.map((note, i) => {
        //     if (i === id) {
        //       // if matches the ID in question, modify the note!
        //       return {id: id, name: newName, text: newText};
        //     } else {
        //       // The rest haven't changed
        //       return note;
        //     }
        //   });

        //   // finally, set the state to the new array with modified note!
        //   setNotes(newNotes);

        // NEW (WITH FIREBASE)
        updateNote(id, newName, newText);
    
    }

    let allNotes = '';
    if (notes != null){
    allNotes = Object.entries(notes).map(([id, note]) => {
        return (
            <Note2
                name={note.name}
                text={note.text}
                id={id}
                key={id}
                delete={delNote} // passing callback function!
                edit={editNote}
            />
            );
        }
    );
    }

    


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
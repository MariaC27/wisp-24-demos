import React, { Component } from 'react';
import { Map } from 'immutable';
import Note from './Note';
import './App.css';
class NoteBoard extends Component {
    constructor(props) {
    super(props);
    this.state = {
        notes: Map(),
        noteID: 0,
        newNoteName: '',
        newNoteText: '',
    }

    }
    newNoteNameFunction = (event) => {
        this.setState({ newNoteName: event.target.value });
    }
    newNoteTextFunction = (event) => {
        this.setState({ newNoteText: event.target.value });
    }

    saveNoteInfo = () => {
        let noteData = {
          name: this.state.newNoteName,
          text: this.state.newNoteText,
        }
        this.setState({
          notes: this.state.notes.set(this.state.noteID, noteData),
          noteID: this.state.noteID + 1,
        });
      }

    
   
     
     
 render() {
    let allNotes = '';
    if (this.state.notes != null){
        allNotes = this.state.notes.entrySeq().map(
            ([id, note]) => {
              return (
                <Note
                  name={note.name}
                  text={note.text}
                  id={id}
                  key={id}
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
        <input type="text" value={this.state.newNoteName} onChange={this.newNoteNameFunction} />

        <p>enter text:</p>
        <input type="text" value={this.state.newNoteText} onChange={this.newNoteTextFunction} />
       <button onClick={this.saveNoteInfo}>Save!</button>

        <div className="notes-flex">
          {allNotes}
        </div>
       

     </div>
   );
 }
}
export default NoteBoard;
import React from 'react';
import './App.css';


const Note2 = (props) => {
  return (
    <div className="note">
       <p>{props.name}</p>
       <p>{props.text}</p>
     </div>
  )
}

export default Note2;
import React, { Component } from 'react';
import './App.css';

class Note extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }
 render() {
   return (
     <div className='note'>
       <p>{this.props.name}</p>
       <p>{this.props.text}</p>
     </div>
   )
 }
}
export default Note;
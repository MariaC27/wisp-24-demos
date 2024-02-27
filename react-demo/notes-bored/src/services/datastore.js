// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, update, remove, onValue } from "firebase/database"; // add this line!!


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2ccJSh2aBwzGIyqMIPmN8RIw2n3wRlC8",
  authDomain: "wisp-notes.firebaseapp.com",
  databaseURL: "https://wisp-notes-default-rtdb.firebaseio.com",
  projectId: "wisp-notes",
  storageBucket: "wisp-notes.appspot.com",
  messagingSenderId: "223047624284",
  appId: "1:223047624284:web:49dde918aba3f988eee899",
  measurementId: "G-W3F44E1YEQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getDatabase(app);


export function getAllNotes(callback = () => {}) {
    const noteRef = ref(db, 'notes/');
    onValue(noteRef, (snapshot) => {
        const notes = snapshot.val();
        callback(notes)
    });
}

export function addNewNote(noteId, noteName, noteText) {
    set(ref(db, 'notes/' + noteId), {
      name: noteName,
      text: noteText,
    });
}

export function deleteNote(id) {
    remove(ref(db, 'notes/' + id))
}

export function updateNote(noteId, newName, newText) {
    update(ref(db, 'notes/' + noteId), {
        name: newName,
        text: newText,
    });
}
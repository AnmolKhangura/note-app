import { useState } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Note from "../common/Note";
import CreateArea from "../common/CreateArea";

function App() {

  const [notes, setNotes] = useState([]);

  function addNote(newNote){
    setNotes(prevValue => {
      return [...prevValue, newNote]
    })
    
  }

  function deleteNote(noteId){
    setNotes(prevNotes => {
      return prevNotes.filter((val,index) => index !== noteId)
    })
    console.log(noteId);
    

  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((note,index) => {
        return <Note key={index} id={index} title={note.title} onDelete={deleteNote} content={note.content} />
      })}
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

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

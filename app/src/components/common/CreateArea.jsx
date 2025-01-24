import {useState} from "react";
import PropTypes from 'prop-types';
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {
  
 const [note, setNote] = useState({
  title: "",
  content: ""
 })

 const [isExpanded, setExpanded] = useState(false);

 function handleChange(event){
    const {name, value} = event.target;

    setNote(prevNote => {
      return {...prevNote, [name]:value}
    })
 }

 function submitNote(event){
  props.onAdd(note);
  event.preventDefault();
  setNote({title: "", content: ""})
 }

 function expand(){
  setExpanded(true);
 }

  return (
    <>
      <form className="create-note">
        {isExpanded && <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/> }

        <textarea name="content" onClick={expand} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}> <AddIcon /> </Fab>
        </Zoom>
      </form>
    </>
  );
}

CreateArea.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default CreateArea;

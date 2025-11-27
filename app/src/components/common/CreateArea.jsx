import {useState, useEffect} from "react";
import PropTypes from 'prop-types';
import AddIcon from "@mui/icons-material/Add";
import UpdateIcon from "@mui/icons-material/Update";
import CancelIcon from "@mui/icons-material/Cancel";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";


function CreateArea(props) {
  
 const [note, setNote] = useState({
  title: "",
  content: ""
 })

 const [isExpanded, setExpanded] = useState(false);

 // If in edit mode, expand by default and populate with note data
 useEffect(() => {
   if (props.editingNote) {
     setNote(props.editingNote);
     setExpanded(true);
   }
 }, [props.editingNote]);

 function handleChange(event){
    const {name, value} = event.target;

    setNote(prevNote => {
      return {...prevNote, [name]:value}
    })
 }

 function submitNote(event){
  if (props.isEditMode) {
    props.onUpdate(note);
  } else {
    props.onAdd(note);
  }
  event.preventDefault();
  setNote({title: "", content: ""})
  setExpanded(false);
 }

 function handleCancel() {
   setNote({title: "", content: ""});
   setExpanded(false);
   if (props.onCancel) props.onCancel();
 }

 function expand(){
  setExpanded(true);
 }

  return (
    <>
      <form className="create-note">
        {isExpanded && <input name="title" onChange={handleChange} placeholder="Title" value={note.title}/> }

        <textarea name="content" onClick={expand} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 : 1} value={note.content}/>
          <Zoom in={props.isEditMode}>
            <Fab
              variant="contained"
              onClick={handleCancel}
              disabled={props.isLoading}
              sx={{ textTransform: 'none', marginLeft: 1 }}
            >
              <CancelIcon />
            </Fab>
          </Zoom>
          <Zoom in={isExpanded}>
            <Fab
              variant="contained"
              color="primary"
              onClick={submitNote}
              disabled={props.isLoading}
              sx={{ textTransform: 'none' }}
            >
              {props.isLoading ? (props.isEditMode ? 'Updating...' : 'Adding...') : (props.isEditMode ? <UpdateIcon /> : <AddIcon />)}
            </Fab>
          
          </Zoom>

      </form>
    </>
  );
}

CreateArea.propTypes = {
  onAdd: PropTypes.func,
  onUpdate: PropTypes.func,
  onCancel: PropTypes.func,
  isEditMode: PropTypes.bool,
  editingNote: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  isLoading: PropTypes.bool,
};

export default CreateArea;

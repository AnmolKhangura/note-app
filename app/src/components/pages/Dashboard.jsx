import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import Header from "../common/Header";
import Footer from "../common/Footer";
import Note from "../common/Note";
import CreateArea from "../common/CreateArea";
import { CircularProgress } from '@mui/material';
import notesService from '../../api/notesService';

function Dashboard() {

  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState(null);
  const [editLoading, setEditLoading] = useState(false);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await notesService.getNotes();
      setNotes(res.data || []);
    } catch (error) {
      console.error('Failed to fetch notes', error);
      toast.error('Failed to load notes');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  async function addNote(newNote){
    try {
      await notesService.addNote(newNote);
      toast.success('Note added');
      await fetchNotes();
    } catch (error) {
      console.error('Failed to add note', error);
      toast.error('Failed to add note');
    }
  }

  async function deleteNote(noteId){
    try {
      await notesService.deleteNote(noteId);
      toast.success('Note deleted');
      await fetchNotes();
    } catch (error) {
      console.error('Failed to delete note', error);
      toast.error('Failed to delete note');
    }
  }

  function openEditModal(noteId) {
    setEditingNoteId(noteId);
  }

  async function handleEditSave(updatedNote) {
    if (!editingNoteId) return;
    setEditLoading(true);
    try {
      await notesService.updateNote(editingNoteId, updatedNote);
      toast.success('Note updated');
      setEditingNoteId(null);
      await fetchNotes();
    } catch (error) {
      console.error('Failed to update note', error);
      toast.error('Failed to update note');
    } finally {
      setEditLoading(false);
    }
  }

  function handleEditCancel() {
    setEditingNoteId(null);
  }

  return (
    <div>
      <Header />
      <CreateArea
        onAdd={addNote}
        onUpdate={handleEditSave}
        onCancel={handleEditCancel}
        isEditMode={!!editingNoteId}
        editingNote={editingNoteId ? notes.find(n => n.id === editingNoteId) : null}
        isLoading={editLoading}
      />
      {loading ? (
        <div style={{display: 'flex', justifyContent: 'center', marginTop: 32}}>
          <CircularProgress />
        </div>
      ) : (
        notes.map((note) => {
          return (
            <Note
              key={note.id}
              id={note.id}
              title={note.title}
              onDelete={deleteNote}
              onEdit={openEditModal}
              content={note.content}
            />
          )
        })
      )}
      <Footer />
    </div>
  );
}

export default Dashboard;

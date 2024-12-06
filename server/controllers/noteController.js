import Note from "../models/Note.js";

async function getNotes(req,res){
    try {
        console.log(req.user);
        
        const notes = await Note.getUserNotes(req.user.id);
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user notes' });    
    }
}

async function addNote(req,res){
    try {
        console.log(req.body);
        
        const notes = await Note.createNote(req.user.id, req.body.title, req.body.content);
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add user note' });
    }
}

async function updateNote(req, res){
    try {
        console.log(req.body);

        const note = await Note.updateNote(req.user.id, req.params.id, req.body.title, req.body.content)
        res.status(200).json(note);
        
    } catch (error) {
        res.status(500).json({ error: 'Failed to update note' });
    }
}

async function deleteNote(req,res){
    try {
        const note = await Note.deleteNote(req.user.id, req.params.id)
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete note' });
    }
}

export {getNotes, addNote, updateNote, deleteNote}
import db from '../db/db.js';

//get notes 

async function getUserNotes(userId){
    const result = await db.query('SELECT id,title,content FROM notes WHERE user_id = $1', [userId]);
    return result.rows;
}

//post note
async function createNote(userId, title, content){
    const result = await db.query(
        'INSERT INTO notes (user_id, title ,content) VALUES ($1, $2, $3) RETURNING id, title, content',
        [userId, title, content]
      );
      return result.rows[0];
}

//put note/:id
async function updateNote(id, title, content){
    const result = await db.query(
        'UPDATE notes SET title = $1, content = $2 WHERE id = $3 RETURNING id, title, content',
        [title,content,id]
    );
    return result.rows[0]
}

//delete note/:id

async function deleteNote(id){
    const result = await db.query(
        'DELETE FROM notes WHERE id = $1 RETURNING id, title, content',
        [id]
    );

    return result.rows[0]
    
}


export default {getUserNotes, createNote, updateNote, deleteNote}
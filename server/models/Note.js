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
async function updateNote(userId, id, title, content){
    const result = await db.query(
        'UPDATE notes SET title = $1, content = $2 WHERE id = $3 AND user_id = $4 RETURNING id, title, content',
        [title,content,id,userId]
    );
    return result.rows[0]
}

//delete note/:id

async function deleteNote(userId,id){
    const result = await db.query(
        'DELETE FROM notes WHERE id = $1 AND user_id = $2 RETURNING id, title, content',
        [id,userId]
    );

    return result.rows[0]
    
}


export default {getUserNotes, createNote, updateNote, deleteNote}
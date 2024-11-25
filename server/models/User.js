import db from '../db/db.js';

async function getUserById(id) {
  const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

async function getUserByEmail(email) {
  const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
  return result.rows[0];
};

async function createUser(email, password, name){
    
    const result = await db.query(
        'INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id',
        [email, password, name]
    )

    return result.rows[0];
}

export default {getUserById, getUserByEmail, createUser};
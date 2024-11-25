import jwt from 'jsonwebtoken'
import env from 'dotenv'

env.config();

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;
const JWT_EXPIRATION = '1h';

function createToken(userId){
    return jwt.sign({ id: userId }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
}

function verifyToken(token){
    try {
        return jwt.verify(token, JWT_SECRET); 
      } catch (error) {
        console.error('Token verification failed:', error.message);
        return null; 
      }
}


export default {createToken, verifyToken};
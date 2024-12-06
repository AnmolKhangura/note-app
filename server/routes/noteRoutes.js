import express from 'express';
import { getNotes, addNote, updateNote, deleteNote} from "../controllers/noteController.js";
import passport from '../config/passport.js';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }) ,getNotes);
router.post('/', passport.authenticate('jwt', { session: false }), addNote);
router.put('/:id', passport.authenticate('jwt', { session: false }), updateNote);
router.delete('/:id', passport.authenticate('jwt', { session: false }), deleteNote);


export default router;
import express from 'express';
import { getNotes, addNote, updateNote, deleteNote} from "../controllers/noteController.js";

const router = express.Router();

router.get('/:id', getNotes);
router.post('/:id', addNote);
router.put('/:id', updateNote);
router.delete('/:id', deleteNote);


export default router;
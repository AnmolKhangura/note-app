import express from 'express'
import { register, login } from "../controllers/authController.js";
import passport from '../config/passport.js';

const router = express.Router();


router.post('/register', register);
router.post('/login', passport.authenticate('local', { session: false }), login);

export default router;
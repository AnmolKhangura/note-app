import express from 'express'
import { register, login, oauth } from "../controllers/authController.js";
import passport from '../config/passport.js';

const router = express.Router();


router.post('/register', register);
router.post('/login', passport.authenticate('local', { session: false }), login);
router.get("/google", passport.authenticate('google', {scope: ["profile", "email"]}))
router.get("/google/secrets", passport.authenticate('google', { session: false }), oauth)

export default router;
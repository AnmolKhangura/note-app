import express from 'express';
import getUser from '../controllers/userController.js';
import passport from '../config/passport.js';

const router = express.Router();

router.get('/', passport.authenticate('jwt', { session: false }) ,getUser);

export default router;
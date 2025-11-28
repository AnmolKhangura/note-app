import express from "express";
import cors from "cors";
import passport from './config/passport.js';
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js';
import noteRoutes from './routes/noteRoutes.js';
import env from "dotenv";

env.config();
 
const app = express();


const port = 3000;


app.use(cors({
  origin: process.env.FRONTEND_URL, 
  credentials: true, 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/notes', noteRoutes);



app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

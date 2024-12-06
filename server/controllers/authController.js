import User from "../models/User.js";
import passwordUtil from "../utils/passwordUtil.js";
import jwtUtil from "../utils/jwtUtil.js";


async function register(req, res){
    try {
        const {email, password, name} = req.body;

        const hashedPassword = await passwordUtil.hashPassword(password)

        const newUser = await User.createUser(email,hashedPassword,name);

        console.log("User registered: ",  newUser);

        const token = jwtUtil.createToken(user.id);
        res.status(201).json({ token , message: `User ${newUser.id} registered successfully`});

        
    } catch (error) {

        if(error.code === '23505')
            res.status(500).json({ error: 'User already exists.' });
        else
            res.status(500).json({ error: 'Failed to register user' });

        console.log(error);
    }

    
}

async function login(req, res){
    try {
        const user = req.user;  // Passport sets this after successful authentication

        // res.status(201).json({ message: `User ${user.id} logged in successfully`, user});
        const token = jwtUtil.createToken(user.id);
        res.status(201).json({ token });
    } 
    catch (error) {
        res.status(500).json({ error: 'Failed to login' });
    }
}

export {register, login};


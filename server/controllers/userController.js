import User from "../models/User.js";

async function getUser(req, res) { 
    try {
        const {name} = await User.getUserById(req.user.id);
        res.status(200).json(name);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user' });    
    }
}

export default getUser;
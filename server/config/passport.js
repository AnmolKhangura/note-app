import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy } from "passport-local";
import env from "dotenv";
import User from '../models/User.js';
import passwordUtil from '../utils/passwordUtil.js';

env.config();

const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET;

passport.use(
    "local"
    ,
    new Strategy(
      {
        usernameField: "email"
      },
      async (username, password, done) => {
  
        try {

          const user = await User.getUserByEmail(username);

          console.log(user);
          
            //check if the user exists 
          if (user) {
            const storedHashedPassword = user.password;

            const valid = await passwordUtil.comparePassword(password, storedHashedPassword);

            console.log("Login", valid);
            
            if (valid){
                return done(null, user);
            }
            else{
                return done(null,false);
            }
          } 
          else {
            return done(null,false, {message: "User not found."});
          }
        } 
  
        catch (err) {
            console.error(err);
            done(err);
        }
  
      }
    )
)



passport.use(
    "jwt",
    new JwtStrategy(
        {
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: JWT_SECRET
        },
        async (payload, done) => {

            try {
                console.log(payload);
                
                // const user = await User.getUserById(payload.id);
            } 
            catch (err) {
                console.error(err);
                done(err)
            }

        }
    )
)

export default passport;
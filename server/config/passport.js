import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { Strategy } from "passport-local";
import GoogleStrategy from "passport-google-oauth2";
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
            console.log("user not found");
            return done(null,false, {message: "User not found."});
          }
        } 
  
        catch (err) {
            console.error(err);
            return done(err);
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
            const user = await User.getUserById(payload.id);
            if(user)
              return done(null, user);
            else
              return done(null, false);
          } 
          catch (err) {
            console.error(err);
            return done(err)
          }

        }
    )
)

passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async (accessToken, refreshToken, profile, cb) => {
      try {
        console.log(profile);
        const user = await User.getUserByEmail(profile.email)        
        if (!user) {
          const newUser = await User.createUser(profile.email, "google", profile.displayName);
          console.log("New google sign in", newUser);
          
          return cb(null, newUser);
        } else {
          console.log("Google sign in", user);
          return cb(null, user);
        }
      } catch (err) {
        return cb(err);
      }
    }
  )
);

export default passport;
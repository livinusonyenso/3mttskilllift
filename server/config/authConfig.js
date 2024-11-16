import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/userModel.js";

export const loginStrategy = () => {
    passport.use(new LocalStrategy(
        {usernameField: 'email', passwordField: 'password'}, async (email, password, done) => {
            
            try {
                if (!email || !password){
                    return done(null, false, {message: 'Please provide email and password'})
                }

                const user = await User.findOne({ email }).select('+password')

                if (!user){
                    return done(null, false, {message: "Incorrect email or password"})
                }

                const isMatch = await user.comparePassword(password, user.password)

                // if(!isMatch){
                //     return done(null, false, {message: "Incorrect email or password"})
                // }
                return done(null, user)
            } catch (error) {
                return done(error)
            }
        }
    ))
}
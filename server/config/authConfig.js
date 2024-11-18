import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import User from "../models/userModel.js";
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

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

                if(!isMatch){
                    return done(null, false, {message: "Incorrect email or password"})
                }

                user.password = undefined

                return done(null, user)
            } catch (error) {
                return done(error)
            }
        }
    ));

    // let cookieExtractor = function(req){
    //     let token = null;
    //     if (req && req.cookies){
    //         token = req.cookies.token
    //     }
    //     return token;
    // }

    const jwtOptions = {
        // jwtFromRequest: ExtractJwt.fromExtractors([cookieExtractor]),
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.JWT_SECRET,
    }

    passport.use(new JwtStrategy(jwtOptions, async(payload, done) => {
        try {
            const user = await User.findById(payload.id);
            if(user){
                return done(null, user)
            } else {
                return done(null, false, { message: 'User not found' });
            }
        } catch (error) {
            return done(error, false, { message: 'Authentication error' });
        }
    }))
}
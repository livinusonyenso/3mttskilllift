import { Router } from "express";
import { register } from "../controllers/authController.js";
import passport from "passport";

const router = Router()

router.post("/register", register)

router.post('/login', async(req, res, next) => {
    passport.authenticate('local', {session: false}, (err, user, info) => {
        console.log(req.body);
        
        if (err) return next(err);

        if(!user){
            return res.status(400).json({
                message: info.message || "Invalid Credentials"
            })
        }

        user.password = undefined

        console.log(user);
        
    })(req, res, next)
})


export default router
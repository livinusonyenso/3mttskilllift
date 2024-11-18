import { Router } from "express";
import { register } from "../controllers/authController.js";
import passport from "passport";
import { loginValidation, registerValidation } from "../middlewares/validationMiddleware.js";
import { validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { isAuthenticated } from "../middlewares/auth.js";

const router = Router()

router.post("/register", registerValidation, register)

router.post('/login', loginValidation, async(req, res, next) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        const errorMessage = errors.array().map((err) => err.msg)

        return res.status(400).json({ errors: errorMessage });
    }

    passport.authenticate('local', {session: false}, (err, user, info) => {
        if (err) return next(err);
        if (!user){
            return res.status(400).json({
                message: info.message || "Invalid Credentials"
            })
        }
        
        // Generate JWTs
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {expiresIn: '15m'});
        
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            maxAge: 15 * 60 * 1000, //15 minutes
        });

        req.user = user

        return res.status(200).json({
            message: 'Login successful',
            token
        })
        
    })(req, res, next)
})

router.get('/current-user', isAuthenticated, (req, res, next) => {
    const { user } = req
    
    if (!user){
        return res.status(401).json({
            status: "fail",
            message: "Access Denied"
        })
    }

    res.status(200).json({
        status: "success",
        data: user
    })
    
})


export default router
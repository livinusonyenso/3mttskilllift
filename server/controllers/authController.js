import { validationResult } from "express-validator";
import User from "../models/userModel.js";

export const register = async (req, res, next) => {
    try {
        const errors = validationResult(req)
        
        if (!errors.isEmpty()){
            const errorMessage = errors.array().map((err) => err.msg)
            return res.status(400).json({ errors: errorMessage});
        }
        
        const user = await User.create(req.body);

        if (!user) {
            return res.status(400).json({
                status: "fail",
                message: "Could not create user!"
            });
        }

        res.status(201).json({
            status: "success",
            message: "User successfully created!",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: "error",
            message: "An error occurred while creating the user.",
            error: error.message
        });
    }
};

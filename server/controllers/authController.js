import User from "../models/userModel.js";

export const register = async (req, res, next) => {
    try {
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
            data: user
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

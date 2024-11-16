import { body } from "express-validator";
import User from "../models/userModel.js";

export const registerValidation = [
    body("firstName")
        .notEmpty().withMessage("First name is required.")
        .trim().escape(),
    body("lastName")
        .notEmpty().withMessage("Last name is required.")
        .trim().escape(),
    body("email")
        .notEmpty().withMessage("Email is required.")
        .isEmail().withMessage("Not a valid email address.")
        .trim()
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) {
                throw new Error("Email already used.");
            }
        }),
    body("password")
        .notEmpty().withMessage("Password is required.")
        .isLength({ min: 8 }).withMessage("Password should be at least 8 characters long.")
        .trim().escape(),
    body("confirmPass")
        .custom((value, { req }) => {
            if (value === req.body.password) {
                return true; 
            }
            throw new Error("Password and confirm password do not match.");
        }),
    
    body("dateOfBirth")
        .notEmpty().withMessage("Date of birth is required.")
        .isISO8601().withMessage("Invalid date of birth format.")
        .trim().escape(),
    body("location")
        .notEmpty().withMessage("Location is required.")
        .trim().escape(),
    body("phoneNo")
        .notEmpty().withMessage("Phone number is required.")
        .trim().escape(),
    body("school")
        .notEmpty().withMessage("School is required.")
        .trim().escape(),
    body("gradeLevel")
        .notEmpty().withMessage("Grade level is required.")
        .trim().escape(),
    body("areaOfInterest")
        .notEmpty().withMessage("Area of interest is required.")
        .trim().escape()
];

export const loginValidation = [
    body("email").notEmpty().withMessage("Email is required.").trim().escape().isEmail().withMessage("Not a valid email address."),
    body("password").notEmpty().withMessage("Password is required").isLength({ min: 8 }).withMessage("Password should be at least 8 characters long.").trim().escape(),
]

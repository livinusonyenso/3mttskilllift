import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        lowercase: true,
        require: [true, "Please enter your first name!"]
    },
    lastName: {
        type: String,
        lowercase: true,
        require: [true, "Please enterr your last name!"]
    },
    email: {
        type: String,
        lowercase: true,
        require: [true, "Please enter your email!"]
    },
    password: {
        type: String,
        require: [true, "Enter your password!"],
        minLength: [8, "Password must be atleas 8 characters long!"], 
        select: false
    },
    role: {
        type: String,
        enum: ["Student", "Teacher", "Admin"],
        default: "Student"
    }, 
    dateOfBirth: {
        type: String,
        require: [true, "Date of birth is required!"]
    },
    location: {
        type: String,
        lowercase: true
    },
    phoneNo: {
        type: String,
        require: [true, "Phone no. is required"]
    },
    school: {
        type: String,
        lowercase: true,
        require: [true, "School is required!"]
    },
    gradeLevel: {
        type: String,
        lowercase: true
    },
    areaOfInterest: {
        type: String,
        lowercase: true,
        require: [true, "Area of interest required!"]
    }
})

userSchema.methods.comparePassword = async function(userPass, passInDb){
    return await bcrypt.compare(userPass, passInDb)
}

const User = mongoose.model("User", userSchema)

export default User
import { Router } from "express";
import { register } from "../controllers/authController.js";

const router = Router()

router.get("/register", register)


export default router
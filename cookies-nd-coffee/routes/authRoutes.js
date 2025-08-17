import { loginUser } from "../controllers/authController.js";
import { Router } from "express";

const authRouter = Router()

authRouter.post("/login", loginUser)


export default authRouter
import { Router } from "express";
import {
    getAllUsers,
    getOneUserById,
    updateOneUserById,
    deleteOneUserById,
    addAUser
} from "../controllers/userController.js"
import { requiredAuth } from "../middlewares/authMiddleware.js";

const userRouter = Router()
// userRouter.post("/login", loginUser)
userRouter.get("/", getAllUsers)
userRouter.get("/:id", getOneUserById)
userRouter.post("/add", addAUser)
userRouter.put("/update/:id", updateOneUserById)
userRouter.delete("/:id", deleteOneUserById)

export default userRouter

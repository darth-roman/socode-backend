import { Router } from "express";
import {
    getAllUsers,
    getOneUserById,
    updateOneUserById,
    deleteOneUserById,
    addAUser,
    loginUser
} from "../controllers/userController.js"

const userRouter = Router()
userRouter.post("/login", loginUser)
userRouter.get("/", getAllUsers)
userRouter.get("/:id", getOneUserById)
userRouter.post("/add", addAUser)
userRouter.put("/update/:id", updateOneUserById)
userRouter.delete("/:id", deleteOneUserById)

export default userRouter

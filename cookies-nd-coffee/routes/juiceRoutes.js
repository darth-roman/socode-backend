import { Router } from "express";
import {
    getAJuiceById,
    getAllJuices,
    updateAJuice,
    deleteAJuice,
    addAJuice,
} from "../controllers/juiceController.js"

const juiceRouter = Router()

juiceRouter.get("/", getAllJuices)
juiceRouter.get("/:id", getAJuiceById)
juiceRouter.post("/add", addAJuice)
juiceRouter.put("/update/:id", updateAJuice)
juiceRouter.delete("/:id", deleteAJuice)

export default juiceRouter

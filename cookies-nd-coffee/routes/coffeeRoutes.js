import { Router } from "express";
import {
    getACoffeeById,
    getAllCoffees,
    updateACoffee,
    deleteACoffee,
    addACoffee,
    getCoffeeByOrigin
} from "../controllers/coffeeController.js"

const coffeeRouter = Router()

coffeeRouter.get("/", getAllCoffees)
coffeeRouter.get("/:id", getACoffeeById)
coffeeRouter.get("/origin/:origin", getCoffeeByOrigin)
coffeeRouter.post("/add", addACoffee)
coffeeRouter.put("/update/:id", updateACoffee)
coffeeRouter.delete("/:id", deleteACoffee)

export default coffeeRouter

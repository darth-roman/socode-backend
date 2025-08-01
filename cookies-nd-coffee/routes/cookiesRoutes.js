import {Router} from "express"

import { getACookie, addACookie, getAllCookies, updateACookie, deleteACookie } from "../controllers/cookiesController.js"

const cookiesRouter = Router()

cookiesRouter.post("/create", addACookie)
cookiesRouter.get("/:id", getACookie)
cookiesRouter.get("/", getAllCookies)
cookiesRouter.patch("/:id", updateACookie)
cookiesRouter.delete("/:id", deleteACookie)



export default cookiesRouter
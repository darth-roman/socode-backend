import {Router} from "express"
import { getAllCookies, getOneCookieById, addACookie} from "../controllers/cookieController.js"

const cookieRouter = Router()

cookieRouter.get("/", getAllCookies)
cookieRouter.get("/:id", getOneCookieById)
cookieRouter.post("/create", addACookie)



export default cookieRouter
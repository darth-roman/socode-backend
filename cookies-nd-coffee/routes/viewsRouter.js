import { Router } from "express";

const viewRouter = Router()

viewRouter.get("/login", (req, res, next) => {
    res.render("auth/login")
})

viewRouter.get("/", (req, res, next) => {
    res.render("home")
})

viewRouter.get("/dashboard", (req, res, next) => {
    res.render("users/dashboard")
})


export default viewRouter
import DBConnection from "../config/DBConfig.js";
import Cookie from "../models/Cookie.js"
import dotenv from "dotenv"
dotenv.config()

DBConnection(process.env.DATABASE_NAME)


async function getAllCookies(req, res) {
    try {
        const allCookies = await Cookie.find({})
        if(allCookies.length > 0) res.status(200).json(allCookies)
        else res.status(500).json({message: "There was a problem"})
    } catch (error) {
        console.error();
    }
}


async function getOneCookieById(req, res) {
    try {
        const foundCookie = await Cookie.findById(req.params.id)
        if(foundCookie) res.status(200).json(foundCookie)
        else res.status(404).json({message: "Cookie Not Found"})
    } catch (error) {
        console.error();
    }
}

async function addACookie(req, res) {
    try {
        const newCookie = new Cookie(req.body)
        const isAdded = newCookie.save()

        if(isAdded) res.status(201).json(newCookie)
         else res.status(500).json({message: "Cookie Not Created"})
    } catch (error) {
        console.error();
    }
}



export {
    getAllCookies,
    getOneCookieById,
    addACookie
}
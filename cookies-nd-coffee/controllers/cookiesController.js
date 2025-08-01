import Cookie from "../models/Cookie.js";
import DBConnection from "../config/DBConfig.js";


DBConnection(process.env.DATABASE_NAME)

const getAllCookies = async (req, res, next) => {
    try{
        const allCookies = await Cookie.find({})
        if(allCookies.length > 0) res.status(200).json(allCookies)
        else res.status(400).json()
    }catch(err){
        console.error(err)
    }
}

const getACookie = async (req, res, next) => {
    try{
        const cookie = await Cookie.findById(req.params.id)
        // console.log(cookie);
        if(cookie) res.status(200).json(cookie)
        else res.status(404).json()
        next()
    }catch(err){
        console.error(err)
    }
}

const addACookie = async (req, res, next) => {
    try{
        const cookieToBeAdded = new Cookie(req.body)
        cookieToBeAdded.save()
        if(cookieToBeAdded) {
            res.status(200).json(cookieToBeAdded);
        }
        else res.status(404).json();
        next()
    }catch(error){
        console.log(error)
    }
}

const updateACookie = async (req, res, next) => {
    const queryOptions = {
        returnDocument: "after"
    }
    try{
        const cookieToBeUpdated = await Cookie.findByIdAndUpdate(req.params.id, req.body, queryOptions)
        if(cookieToBeUpdated) res.status(200).json(cookieToBeUpdated)
        else res.status(400).json()
    }catch(err){
        console.error(err)
    }
}

const deleteACookie = async (req, res, next) => {
    try{
        const cookieToBeDeleted = await Cookie.findByIdAndDelete(req.params.id)
        if(cookieToBeDeleted) res.status(200).json(cookieToBeDeleted)
        else res.status(400).json()
    }catch(err){
        console.error(err)
    }
}

export {getACookie, addACookie, getAllCookies, updateACookie, deleteACookie}
import jwt from "jsonwebtoken"
import User from "../models/User.js"

const requiredAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if(!token) {
        return res.status(401).json({error: "Access Denied"})
        // return res.redirect("/login")
    }
    try{
        const decoded = jwt.verify(token, "darth-roman")
        req.id = decoded.userId
        next()
    }catch(error){
        console.error(error);
    }
}


const checkUser = (req, res, next) => {
    const token = req.cookies.jwt
    if(token) {
        jwt.verify(token, "darth-roman",async (err, decodedToken) => {
            if(err){
                res.locals.user = null
                next()
            }else{
                let user = User.findById(decodedToken.id)
                res.locals.user = user
                next()
            }
        })
    }else{
        res.locals.user = null
        next()
    }
}

export {
    requiredAuth,
    checkUser
}
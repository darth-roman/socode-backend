import User from "../models/User.js";
import jwt from "jsonwebtoken"

// const maxAge = 24 * 3600
// const createToken = (id) => {
//     return jwt.sign({id}, "darth-roman", {
//         expiresIn: maxAge
//     }) 
// }

const maxAge = 4 * 1000 * 24 * 60 * 60
const createToken = (id) => {
    return jwt.sign({id}, "darth-roman", {expiresIn: "2 days"})
}


const loginUser = async (req, res, next) => {
    const {email, password} = req.body

    try {
        const user = await User.login(email, password)
        if(user) {
            // const token = createToken(user._id)
            // res.cookie("jwt", token, {httpOnly: true, maxAge: maxAge * 1000})
            const token = createToken(user._id)
            res.cookie("jwt", token, {
                httpOnly: true,
                maxAge: maxAge
            })
            res.status(200).json({user: user._id, message: "User is logged in"})
            console.log("Logged In");
        }
        next()
    } catch (error) {
        console.error(error);
        
    }
}

export {
    loginUser
}
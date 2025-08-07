import DBConnection from "../config/DBConfig.js";
import User from "../models/User.js";

DBConnection(process.env.DATABASE_NAME)

const addAUser = async (req, res, next) => {
    try {
        const newUser = new User(req.body)
        const addedUser = await newUser.save()
        if(addedUser) res.status(201).json(addedUser)
        else res.status(500).json({message: "Could NOT add a user"})

        next()
} catch (error) {
        console.error(error);
        
    }
}


const getAllUsers = async (req, res, next) => {
    try {
        const allUsers = await User.find({})
        if(allUsers.length > 0) res.status(200).json(allUsers)
        else res.status(500).json({message: "Could NOT add a user"})

        next()
    } catch (error) {
        console.error(error);
        
    }
}


const getOneUserById = async (req, res, next) => {
    try {
        const wantedUser = await User.findById(req.params.id)
        if(wantedUser) res.status(200).json(wantedUser)
        else res.status(404).json({message: "Could NOT Find a user"})

        next()
    } catch (error) {
        console.error(error);
        
    }
}


const deleteOneUserById = async (req, res, next) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        if(deletedUser) res.status(200).json(deletedUser)
        else res.status(400).json({message: "Could NOT Delete a user"})
        next()
    } catch (error) {
        console.error(error);
        
    }
}


const updateOneUserById = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
        if(updatedUser) res.status(200).json(updatedUser)
        else res.status(400).json({message: "Could NOT UPDATE a user"})
        next()
    } catch (error) {
        console.error(error);
        
    }
}

const loginUser = async (req, res, next) => {
    const {email, password} = req.body

    try{
        const user = await User.login(email, password)
        res.status(200).json({user: user, message: "Logged In"})
    }catch(err) {
        console.error(err);
    }
}

export {
    addAUser,
    getAllUsers,
    getOneUserById,
    deleteOneUserById,
    updateOneUserById,
    loginUser
}
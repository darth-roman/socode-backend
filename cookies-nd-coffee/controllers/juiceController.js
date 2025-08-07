import Juice from "../models/Juice.js";
import DBConnection from "../config/DBConfig.js";

DBConnection(process.env.DATABASE_NAME)


const addAJuice = async (req, res, next) => {
    try {
        const newJuice = new Juice(req.body)
        const addedJuice = await newJuice.save()
        if(addedJuice) res.status(201).json(addedJuice)
        else res.status(500).json()

        next()
    } catch (error) {
        console.error(error);
    }
}

const getAllJuices = async (req, res, next) => {
    try {
        const allJuices = await Juice.find({})
        if(allJuices.length > 0) res.status(200).json(allJuices)
        else res.status(500).json()
        next()
    } catch (error) {
        console.error(error);
    }
}

const getAJuiceById = async (req, res, next) => {
    try {
        const foundJuice = await Juice.findById(req.params.id)
        if(foundJuice) res.status(200).json(foundJuice)
        else res.status(500).json()
        next()
    } catch (error) {
        console.error(error);
    }
}

const updateAJuice = async (req, res, next) => {
    try {
        const juiceToBeUpdated = await Juice.findByIdAndUpdate(req.params.id, req.body)
        if(juiceToBeUpdated) res.status(200).json(juiceToBeUpdated)
        else res.status(500).json()
        next()
    } catch (error) {
        console.error(error);
    }
}

const deleteAJuice = async (req, res, next) => {
    try {
        const juiceToBeDeleted = await Juice.findByIdAndDelete(req.params.id)
        if(juiceToBeDeleted) res.status(200).json(juiceToBeDeleted)
        else res.status(500).json()
        next()
    } catch (error) {
        console.error(error);
    }
}

export {
    addAJuice,
    getAllJuices, 
    getAJuiceById, 
    deleteAJuice, 
    updateAJuice
}
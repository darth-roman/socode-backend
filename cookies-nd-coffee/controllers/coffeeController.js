import DBConnection from "../config/DBConfig.js";
import Coffee from "../models/Coffee.js";

// Connecting to Database
DBConnection(process.env.DATABASE_NAME)

// CRUD Functions

// Adding a new coffee / element to the database
const addACoffee = async (req, res, next) => {
    try {
        const newCoffee = new Coffee(req.body)
        const addedCoffee = await newCoffee.save()

        // Checking if the coffee has been added
        // to send a response to the client
        if(addedCoffee) res.status(201).json(addedCoffee)
        else res.status(500).json()
        next()
    } catch (error) {
        console.error(error);
    }
}

const getAllCoffees = async (req, res, next) => {
    try {
        const allCoffees = await Coffee.find({})
        if(allCoffees.length > 0) res.status(200).json(allCoffees)
        else res.status(500).json()
        next()
    } catch (error) {
        console.error(error);
    }
}

const getACoffeeById = async (req, res, next) => {
    try {
        const wantedCoffee = await Coffee.findById(req.params.id)
        if(wantedCoffee) res.status(200).json(wantedCoffee)
        else res.status(404).json()
        next()
    } catch (error) {
        console.error(error);
    }
}

const updateACoffee = async (req, res, next) => {
    try {
        const updatedCoffee = await Coffee.findByIdAndUpdate(req.params.id, req.body)
        if(updatedCoffee) res.status(200).json(updatedCoffee)
        else res.status(500).json()
        next()
    } catch (error) {
        console.error(error);
    }
}


const deleteACoffee = async (req, res, next) => {
    try {
        const deletedCoffee = await Coffee.findByIdAndDelete(req.params.id)
        if(deletedCoffee) res.status(200).json(deletedCoffee)
        else res.status(500).json()
        next()
    } catch (error) {
        console.error(error);
    }
}


const getCoffeeByOrigin = async (req, res, next) => {
     try {
        const wantedCoffee = await Coffee.find({origin: req.params.origin})
        console.log(wantedCoffee);
        
        if(wantedCoffee) res.status(200).json(wantedCoffee)
        else res.status(404).json()
        next()
    } catch (error) {
        console.error(error);
    }
}

export {
    addACoffee,
    getACoffeeById,
    getAllCoffees,
    deleteACoffee,
    updateACoffee,
    getCoffeeByOrigin
}



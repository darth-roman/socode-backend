import {Schema, model} from "mongoose";

const coffeeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    origin: {
        type: String,
        required: true,
        default: "Unknown"
    },
    ingredients: {
        type: [String]
    },
    
}, {
    timestamps: true
})

const Coffee = model("Coffee", coffeeSchema)

export default Coffee
import { Schema, model } from "mongoose";


const options = {
    timestamps: true
}

const juiceSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    fruits: {
        type: [String],
        required: true
    },
}, options)

const Juice = model("Juice", juiceSchema)

export default Juice 
import { Schema, model } from "mongoose";

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
}, {
    timestamps: true
})

const Juice = model("Juice", juiceSchema)

export default Juice 
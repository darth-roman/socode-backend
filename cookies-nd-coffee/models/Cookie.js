import mongoose from "mongoose";

const cookieSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: {
        type: [String],
        required: false
    }
})

const Cookie = mongoose.model("Cookie", cookieSchema)

export default Cookie
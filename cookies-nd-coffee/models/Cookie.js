import { Schema, model } from "mongoose";

const cookieSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    }
})

const Cookie = model('Task', cookieSchema);
export default Cookie
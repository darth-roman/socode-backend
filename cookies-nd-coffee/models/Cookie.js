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

const Cookie = model('Cookie', cookieSchema);
export default Cookie
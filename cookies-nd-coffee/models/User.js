import {Schema, model} from "mongoose";
import bcrypt from "bcrypt"

const schemaOptions = {
    timestamps: true
}


const userSchema = Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "User"
    }
}, schemaOptions)

userSchema.pre("save", function(next){
    const user = this
    if(!user.isModified("password")) return next()
    bcrypt.genSalt(10, (err, salt) => {
        if(err) return next(err)
        bcrypt.hash(user.password, salt, (err, hash) => {
            user.password = hash
            next()
        })
    })
})

userSchema.statics.login = async function(email, password){
    const user = await this.findOne({email})
    if(user) {
        const auth = await bcrypt.compare(password, user.password)
        if(auth) return user
        throw Error("Invalid Password")
    }

    throw Error("Invalid Email")

}

const User = model("User", userSchema)
export default User
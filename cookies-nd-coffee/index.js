// Import express
import path from "path"
import express from "express"
import cookieParser from "cookie-parser"
import cookiesRouter from "./routes/cookieRoutes.js"
import coffeeRouter from "./routes/coffeeRoutes.js"
import juiceRouter from "./routes/juiceRoutes.js"
import userRouter from "./routes/userRoutes.js"
import authRouter from "./routes/authRoutes.js"
import viewRouter from "./routes/viewsRouter.js"
import DBConnection from "./config/DBConfig.js";
import { requiredAuth } from "./middlewares/authMiddleware.js"

// create express app 
const expressApp = express()
const __dirname = import.meta.dirname
// create a PORT value and get it from .env file
const PORT = 3000

// invoke the HTTP method
// expressApp.get("/", (req, res) => {
//     res.send("<h1>Hello World</h1>")
// })
DBConnection(process.env.DATABASE_NAME)

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
// Setting a static public folder
expressApp.use(express.static("public"))
expressApp.use(cookieParser())

// Setting the template  engine
expressApp.set('view engine', 'ejs');
expressApp.set('views', path.join(__dirname, 'views'));

expressApp.use("/", viewRouter)

expressApp.use("/api/auth", authRouter)
expressApp.use("/api/users", userRouter)
expressApp.use("/api/cookies",requiredAuth, cookiesRouter)
expressApp.use("/api/coffees",requiredAuth, coffeeRouter)
expressApp.use("/api/juices",requiredAuth, juiceRouter)

// expressApp.get("/cookie", (req, res) => {
//     res.send("<h1>Hello World</h1>")
// })


// Launch the express app
expressApp.listen(PORT, ()=> {
    console.log(`Listening to ${PORT}`);
})

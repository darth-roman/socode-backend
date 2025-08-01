// Import express
import express from "express"
import cookiesRouter from "./routes/cookiesRoutes.js"
import errorMiddleware from "./middlewares/errorMiddleware.js"
// create express app 
const expressApp = express()

// create a PORT value and get it from .env file
const PORT = process.env.PORT || 3000

// invoke the HTTP method
// expressApp.get("/", (req, res) => {
//     res.send("<h1>Hello World</h1>")
// })

expressApp.use(express.json());
expressApp.use(express.urlencoded({ extended: true }));
expressApp.use(errorMiddleware)
expressApp.use("/api/cookies/", cookiesRouter)

// expressApp.get("/cookie", (req, res) => {
//     res.send("<h1>Hello World</h1>")
// })


// Launch the express app
expressApp.listen(PORT, ()=> {
    console.log(`Listening to ${PORT}`);
})

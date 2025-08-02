import {createServer} from "http"
import { coffees, juices } from "./data.js"



const PORT = 3001

// const requestHandler = (req, response) => {
//     console.log(req.url);
//     response.setHeader("Content-Type", "application/json")
//     response.writeHead(200)
//     response.end(`{"message": "JSON is served"}`)
    
// }

const server = createServer((request, response) => {
    const {url, method, headers} = request;
    console.log(method);
    
    response.setHeader("Content-Type", "application/json")
    switch(url){
        case "/coffee":
            response.writeHead(200)
            response.end(coffees)
            break
        case "/juice":
            response.writeHead(200)
            response.end(juices)
            break
        case "/not-found":
            response.writeHead(200)
            response.end(`{message: "404 Wrong page"}`)
            break
        default: 
            response.setHeader("Content-Type", "text/html")
            response.writeHead(200)
            response.end(`<h1>Defualt Page</h1>`)
    }
    
    
})

server.listen(PORT, "localhost" ,() => {
    console.log(`listning on ${PORT}`);
    
})
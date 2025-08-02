import {request} from "http"


async function fetchSomeQuotes(){
    const response =  await fetch("https://dummyjson.com/users")
    const data = await response.json()

    console.log(data);
    
}

function syncFunction(){
    console.log("Hello From Syn 2");
    
}

function syncFunction2(){
    console.log("Hello From Syn 3");
    
}

fetchSomeQuotes()

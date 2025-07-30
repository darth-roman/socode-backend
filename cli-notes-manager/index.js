import fs from "fs"

// reading files
try{
    const data = fs.readFileSync("files/example1.txt", "utf-8")
    console.log(data);
}catch(err){
    console.error(err);
}

// Write on files
try{
    const data = fs.writeFileSync("files/example1.txt", "Hey", "utf-8")
    console.log("Data written");
}catch(err){
    console.error(err);
    
}

// Append to files
try{
    const data = fs.appendFileSync("files/example1.txt", "\nHey", {encoding: "utf-8", flag:"a"})
    console.log("Data appended");
}catch(err){
    console.error(err);
    
}
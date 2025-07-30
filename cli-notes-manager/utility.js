import os from "os"
import { readFileSync } from "fs"

import path from "path"

// modern alternative for __dirname
const dirname = import.meta.dirname



const notesPath = path.join(dirname, "myNotes/notes.txt")
// console.log(dirname, notesPath);



// [index]" [note content] -> [hostname / author]
const reformNote = (note) => {
    const [, index] = readLastLine()
    const author = os.hostname()
    const newNote = `${index+1}: ${note} -> ${author},`
    return newNote
}


function readLastLine () {
    const data = readFileSync(notesPath, "utf8")
    
    const splitData = data.split(",")
    const indexOfLastLine = splitData.length - 1
    return [splitData[indexOfLastLine], indexOfLastLine];
}

function cleanDatabase(map) {
    map.forEach((elem, index) => {
        if(elem === "") map.delete(index)
    })
}

export {reformNote, readLastLine, cleanDatabase, notesPath}
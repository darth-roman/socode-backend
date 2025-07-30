import {readFileSync, appendFileSync, writeFileSync} from "fs"
<<<<<<< HEAD
import { readFile } from "fs/promises"
import { notesPath, reformNote, cleanDatabase } from "./utility.js"
=======
import {readLastLine, cleanDatabase, reformNote, notesPath} from "./utility.js"

>>>>>>> parent of 66a4fe0 (Finalizing the project)
// // load notes
async function loadNotes() {
        const notes = await [readFile(notesPath, "utf8")][0]
        const tempNotes = await notes.trim().split(",")

        console.log("From Asyn await");
        
        const noteMap = new Map()

<<<<<<< HEAD
        

        // notes.forEach((elem, index) => noteMap.set(index, elem))
        tempNotes.forEach((el, ind) => {
            noteMap.set(ind, el)
        })
        cleanDatabase(noteMap)

        console.log(noteMap);
        
        
        return noteMap
=======
        notes.forEach((elem, index) => noteMap.set(index, elem))
        cleanDatabase(noteMap)
        return noteMap;
    }catch(err){
        console.error(err);
    }
>>>>>>> parent of 66a4fe0 (Finalizing the project)
}

console.log("Hello From gen scope", loadNotes());




const saveNote = (note) => {
    const noteToBeSaved = reformNote(note)
    appendFileSync(notesPath, `${noteToBeSaved}`, "utf-8")
}

// saveNote("Louai wrote this")

const deleteNote = (index) => {
    try{
        // get data from the file + converte it to an array
        // const data = [readFileSync(notesPath, "utf-8")]
        const data = loadNotes()

        // The array is a 1 element concatinated string
        // trim() to remove any additional white spaces from the beginning / end
        // split(delimit) to split the result by the delimiit (new line char)
        // const dataArray = data[0].trim().split(",")

        // // return the index - 1 (array starts at 0)
        // return dataArray[index-1]
        // let item
        // if(index > -1) {
        //     item = dataArray[index-1]
        //     dataArray.splice(index-1, 1)
        // }

        // Map version of delete
        const isDeleted = data.delete(index-1)
        if(isDeleted) {
            // writeFileSync(notesPath, `${data}`, "utf-8")
            // console.log(data);
            cleanDatabase(data)
            writeFileSync(notesPath, "", 'utf-8')
            data.forEach((elem) => {
                appendFileSync(notesPath, `${elem},`, "utf8")
            })
            
        }
        // rewite the new array to the notes.txt
        // writeFileSync(notesPath, `${dataArray}`, "utf-8")

        // console.log(dataArray);

        // returing the item to be deleted
        console.log(isDeleted);
        
        return isDeleted
    }catch(err){
        console.log(err) 
    }
}


/**Tuples */
// function giveCoords(){
//     const x = 0
//     const y = 10
//     const z = -25
//     return [x, y, z]
// }
// const [, ,z] = giveCoords()
// console.log(z); // prints -25





// readLastLine()
// const [lastNote, indexOfLastLine] = readLastLine()

// saveNotes("There")

export {loadNotes, saveNote, deleteNote}
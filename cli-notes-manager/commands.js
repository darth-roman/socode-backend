#!/usr/bin/env node
import yargs from "yargs"; 
import {hideBin} from "yargs/helpers"
import { deleteNote, loadNotes, saveNote } from "./NotesManager.js";

const argv = yargs(hideBin(process.argv))

// argv.command("load-all", "load all notes", {
// })

// yargs()
//     .scriptName("pirate-parser")
//     .usage(`$0 <cmd> [args]`)
//     .command('arrr [name]', 'welcome ter yargs', (yargs) => {
//         yargs.positional("name", {
//             type: 'string',
//             default: 'Cambi',
//             describe: "the name to say hello to"
//         })
//     }, 
//     function (argv){
//         console.log(`hello ${argv.name} welcome to yargs!`);
//     }
// )

//     .help()
//     .parse(hideBin(process.argv))

yargs()
    .command("all", "get all notes", () => console.log(loadNotes()))
    .help()
    .parse(hideBin(process.argv));


yargs()
    .command(
        {command: "save", 
        describe: "save a note", 
        builder: {
            note: {demandOption: true, type: 'string'}
        },
        handler(argv){saveNote(argv.note)}
    })
    .help()
    .parse(hideBin(process.argv))



yargs()
.command(
    {command: "delete", 
    describe: "deletes a note", 
    builder: {
        index: {demandOption: true, type: 'number'}
    },
    handler(argv){deleteNote(argv.index)}
})
.help()
.parse(hideBin(process.argv))
// Asynchronously writing into a file

const fs = require('fs')

fs.writeFile('newFile.txt', 'Hello. This is a data\nI am in second line: How is it', ()=>{
    console.log('Finished writing')
})

console.log("Last line")
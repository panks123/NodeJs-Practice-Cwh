// Synchronously reading from a file

const fs= require('fs')

const data = fs.readFileSync('hello.txt', 'utf8')

console.log(data)

console.log("Last line")
const fs = require('fs')

fs.writeFileSync('newFile.txt', "Hey!!! This is data \n Last line")

console.log('Last line')
const fs= require('fs')


// Asynchronously reading from a file

fs.readFile('hello.txt','utf-8',(err, data)=>{ // Third argument is a callback which takes two arguments error and data
    if(err!=null)
    {
        console.log(err)
    }
    else{
        console.log(data) // here data is the file content
    }
}) 

console.log("Message below readFile") // This line was printed first as the readFile() function was executed asynchronously



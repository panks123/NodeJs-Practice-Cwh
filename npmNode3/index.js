// http module

// For creating an http server we use http module

const http= require('http')

let hostname="127.0.0.1"
const port= process.env.PORT || 3000; // i.e. whichever port our process will get by default or else use 300 port

// console.log(port)

// createserver is a method in http module to create a server which takes a callback having two arguments 'request' and 'response'
const server= http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-type',"text/html") // We are setting the header
    res.end("<h1>Welcome</h1>")
})

// we should always add the listen method for the server which takes two arguments port, at which the will listen and a callback which will 
// execute when the server starts listening
server.listen(port , hostname, ()=>{
    console.log(`Server is listening at port ${port}`)
})
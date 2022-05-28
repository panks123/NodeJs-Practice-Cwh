// Creating custom JS (Serving multiple html files) using node JS

let http=require('http')
let fs=require('fs')

// We are not actually serving the html files but we are sending the file contents
let home=fs.readFileSync('./templates/index.html')
let about=fs.readFileSync('./templates/about.html')
let services=fs.readFileSync('./templates/services.html')
let contact=fs.readFileSync('./templates/contact.html')

let hostname="127.0.0.1"
let port=80

let server=http.createServer((request,response)=>{
    response.statusCode=200
    response.setHeader('Content-Type', 'text/html')

    let url=request.url; // It gives the url of the request
    // console.log(url)
    if(request.url=='/')
    {
        response.end(home)
    }
    else if(url=='/about')
    {
        response.end(about)
    }
    else if(url=='/services')
    {
        response.end(services)
    }
    else if(url=='/contact')
    {
        response.end(contact)
    }
    else
    {
        response.statusCode=404;
        response.end('<h1>404: Not Found</h1>')
    }
    // So  by using if- else we can add as many end points as we want

    // But, we will not use this type of serving files- instead we'll use node express(express JS)
})

server.listen(port,hostname,()=>{
    console.log(`Server listning on port:${port}`)
})
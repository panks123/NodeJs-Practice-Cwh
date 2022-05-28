// npm - npm is the package manager for node.js - It is similar as pip in python

// npm init- command initialize the current working directory as a node package(or we can say project)
            //  when we run this command in the terminal it will start asking for some inputs
            //  after providing all the inputs it will create one 'package.json' file which will contain all the 
            //  inputs which we just provided and the dependencies
            //  , whenever we'll install any module, it will add that module in the dependencies

// npm install pakage_name - command installs the package in the current package and it adds that package in the dependencies in package.json

// npm install command - whenever it is executed first time it creates 'package-lock.json' file and node_modules folder(which contains the dependency tree)
// If acccedently 'package-lock.json' file or node_modules folder is deleted then 'npm install' command execution will create it again

// if we want to install a particular version of a module then we write the comman as 'npm install package_name@version' 
// e.g. npm install slugify@1.6.1 

// Note(for knowledge): version is written as major.minor.patch i.e.(major addition).(minor addition).(patch means bug fixes)

// Sometimes we want a module to be installed as devDependency i.e. we want that module during development only e.g. nodemon 
// nodemon is package which provides command line utility- To run a file using nodemon we write 'nodemon js_filename' 
// Now whenever we do changes in the file, then that change will automatially refreshed after saving
// If we want to install nodemon as  devDependency then we'll write the command as 'npm install nodemon --save-dev'

// If we want to install any module globally so that we can use that module from any project in the computer then 
// we write the command: 'npm install package_name --global'

// Note : 'npm i package_name' is same as 'npm install package_name'

// Command to view a module : 'npm view module_name' e.g. npm view slugify
// Command to view a module's : 'npm view module_name version' e.g. npm view slugify version


const pankajabc=require('./impmodule') // Whatever was exported in the impmodule.js that will be returned here
// This type of import system is called common JS module
// One more type of import is there called ES6 module

const circle=require('./circle')

// How to import a built-in module in Node.js
const os=require('os')
const path=require('path')

console.log(`Area of circle: ${circle.computeArea(5)} | Circumference of circle: ${circle.computeCircumference(5)}`)
console.log("Value of PI: ", circle.PI) // Anything which we have not exported but trying to access using module.exports object i.e. 
                                        // circle object then the result will be undefined 


console.log("module.exports object in index.js file= ", circle)

// console.log('+++++Inside index module++++')
// console.log("exports: ", exports)
// console.log("require: ",require)
// console.log("module: ",module)
// console.log("__filename: ",__filename)
// console.log("__dirname: ",__dirname)
// console.log("+++++++++++++++++++++++++++")

console.log("This is index.js file", pankajabc)

// Using some functions fronm os module

console.log('Total memory in my computer: ', os.totalmem(), "Bytes")
console.log('Free memory in my computer: ', os.freemem(), "Bytes")

console.log("Home directory for the current user : ",os.homedir())
console.log("Hostname : ",os.hostname())
console.log("Platform: ",os.platform())
console.log("Release :", os.release())

const baseName= path.basename("C:\\temp\\myHello.html")
const dirName= path.dirname("C:\\temp\\myHello.html")
const extensionName= path.extname("C:\\temp\\myHello.html")

console.log("Basename: ", baseName)
console.log("Dirname: ",dirName)
console.log("Extension: ", extensionName)
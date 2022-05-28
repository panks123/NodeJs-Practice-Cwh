
// TODO: ECMA script modules(OR ES6 modules)

// We use .mjs extension for making node.JS know that it is a ECMA script module
// FOr importing ECMA script modules (.mjs) we cannot use require(). 
// For ECMA script modules we use 'import' keyword 

// Note: We have to add key 'type' wih value "module" in package.json file 

// import {computeArea } from "./circle.mjs";

// Note : If we are importing something with different name (which is not exported from the module) then in that module we declare that thing as
//         DEFAULT  using 'default' keyword. So any thing that is exported as default will come under this different name
// e.g.

// import area from "./circle.mjs" // but in this case we don't write that different named thing inside curly braces (If we do it gives error)

// But whatever we are importing inside curly braces it's name should exactly match with the exported thing from the other module

// 'as' keyword

// import {computeCircumference as getBoundary} from "./circle.mjs"


// Importing multiple things from a module
// import {computeArea, computeCircumference, PI} from "./circle.mjs"

// importing everything from a module then we use *

import * as circleModule from "./circle.mjs"

console.log(circleModule) // So circleModule is an object containg all the things which was exported in "circle.mjs"

// console.log("Area of circle: ",computeArea(5))

// console.log("Circumference of circle: ", getBoundary(10))
// console.log("Circumference of circle: ", computeCircumference(10))

// console.log("AREA of circle: ", area(10))

// console.log("Value of PI", PI)

console.log()
console.log("Area of circle: ",circleModule.computeArea(5))
console.log("Circumference of circle: ", circleModule.computeCircumference(10))
console.log("Value of PI", circleModule.PI)



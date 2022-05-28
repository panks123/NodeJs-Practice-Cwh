const PI=3.14

const computeArea = (radius) => radius * radius; 

const computeCircumference = (radius) => 2 * PI * radius;



module.exports.computeArea= computeArea;

module.exports.computeCircumference=computeCircumference;

// OR:
module.exports={
    computeArea : computeArea,
    computeCircumference : computeCircumference,
    lifeOfPI: PI
}

console.log("module.exports object in circle.js file= ", module.exports)

// console.log('---Inside circle module----')
// console.log("exports: ", exports)
// console.log("require: ",require)
// console.log("module: ",module)
// console.log("__filename: ",__filename)
// console.log("__dirname: ",__dirname)
// console.log("--------------------------")
/*
But actually This whole code will be wrapped inside the module wrapper function as:

(function(exports, require, module, __filename, __dirname) {

    const PI=3.14

    const computeArea = (radius) => radius * radius; 

    const computeCircumference = (radius) => 2 * PI * radius;

});
*/
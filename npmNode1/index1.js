// Importing built in modules using ES6 modules

// url module

import url from 'url'

const myUrl= new URL("http://example.com")
myUrl.pathname='a/b/c'
myUrl.search='?d=e'  // When we want to give some get parameters
myUrl.hash="#fgh" // To go into a particular section of the page

console.log(myUrl)

console.log("Full url: ", myUrl.href) // So we get full url as :  http://example.com/a/b/c?d=e#fgh
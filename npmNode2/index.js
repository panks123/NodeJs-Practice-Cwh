// Events Module

// This module we use for listening to events : When some events get fired then some code should execute after listening to the event


const EventEmitter = require('events')

// Creating a custom MyEmitter class which extends the class returned by event module 
class MyEmitter  extends EventEmitter {}

const myEmitter = new MyEmitter()

// We have created one event called 'WaterFull', When the 'WaterFull' event gets fired, It will run the callback to turn off the motor
myEmitter.on('WaterFull', ()=>{
    console.log("Motor will be turned off in next 3 seconds...")
    setTimeout(()=>{
        console.log("Motor turned off!!!")
    },3000)
})

console.log("Code is running")
// Let's fire the 'WaterFall' event here
myEmitter.emit('WaterFull')

console.log("Code is still running")

// This events module is helpful when we are developing realtime applications
// E.g. a chat application, where suppose a message is received and then we want as
// soon as the message is received we should play a notification tune


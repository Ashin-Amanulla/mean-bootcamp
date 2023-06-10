const mongoose = require('mongoose')

mongoose.connect('Enter your mongo atlas string')
.then(()=>{
    console.log('Mongo DB connection established successfully')
})
.catch(err => console.log('Error connecting', err.message))
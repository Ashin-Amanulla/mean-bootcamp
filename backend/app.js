const express = require('express'); // requiring express to create a server
const app = express(); //instance of express
const PORT = 5269 // port number

const logger = require('morgan'); //logging
app.use(logger('dev'))

app.use(express.json()); // to parse incoming json data
app.use(express.urlencoded({extended:true})); // to parse incoming multi part data

require('./dB connection') // i am requiring the file of db connection here

const studentRouter = require('./routes/student')
app.use('/student', studentRouter) //sending all student based  api requests to student router


app.listen(PORT,()=>{
    console.log(`server is listening on ${PORT}`);
});  //this is where server starts listening

// I have an idea how to do this. Basically, let there be a request
// We pass it through logger.js and get it logged
// Next,



const express = require('express');
const {logger} = require('./middlewares/logger') ;
const app = express() ;
const PORT = 8000 ;

app.use(logger) ;


app.listen(PORT , ()=>{
    console.log("Running on Port 8000") ;
})


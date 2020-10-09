require('dotenv').config()
var express = require('express')
var bodyparser = require('body-parser')
var allRoutes = require('./api/friends/friends.routers')

var app = express()
app.use(bodyparser.json())
app.use('/api/friends', allRoutes)


app.listen(process.env.APP_PORT, ()=>{
    console.log("Server is listening on port " + process.env.APP_PORT);
})
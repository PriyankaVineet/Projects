const express = require('express')
const mongoosedb = require('mongoose')
const urladress = 'mongodb://localhost/SchoolDB'
const app = express()

mongoosedb.connect(urladress)

const con = mongoosedb.connection

con.on('open',function(){
    console.log('Connected')
})

app.use(express.json())

const testRoute = require('./routes/Schoolroute')
app.use('/School',testRoute)

app.listen(9000, function(){
    console.log('Started')
})

module.exports = con
const express = require('express')
const app = express()

const archiveDB = require('./conection')

const userRoute = require('./routes/user')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))


app.use('/api/user', userRoute)

app.get('/', (req, res) => {
    res.end('Welcome to Node.js Server')
})

app.listen(5000, function(){
    console.log('Server is running successful...')
})
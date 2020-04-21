let express = require('express')
let app = express()
// let personRoute = require('./routes/person')
let hotelRoute = require('./routes/hotel')
let path = require('path')
let bodyParser = require('body-parser')


app.use(bodyParser.json())


app.use((req,res, next)=>{
    console.log(`${new Date().toString()} => ${req.originalUrl}`,req.body)
    next()
})
// app.use(personRoute)
app.use(hotelRoute)
app.use(express.static('public'))


//handler 404 middleware
app.use((req,res,next)=>{
    res.status(404).send('you are lost...')
})

//handler 500 middleware
app.use((err,req,res,next)=>{
    console.error(err.stack)

})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=> console.info(`Server has started on ${PORT}...`))



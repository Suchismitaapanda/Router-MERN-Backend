const express = require("express");
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'))

app.set('view engine', 'ejs')

app.use((req, res, next) =>{
    console.log("this is middleware")
    //res.send('middleware')
    const a=2
    const b=3
    console.log(a+b)
    return next()
})

app.get('/', (req, res) =>{
    //res.send('Hello World')
    res.render('index')
})

app.get('/about', (req, res) =>{
    res.send('About Page')
})

app.get('/profile', (req, res) =>{
    res.send('Profile Page')
})

app.listen(3000)
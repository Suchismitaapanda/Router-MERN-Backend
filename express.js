const express = require("express");
const morgan = require('morgan')
const app = express()
const dbConnection = require('./config/db')
const userModel = require('./models/user')

app.use(morgan('dev'))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.set('view engine', 'ejs')

// app.use((req, res, next) =>{
//     console.log("this is middleware")
//     //res.send('middleware')
//     const a=2
//     const b=3
//     console.log(a+b)
//     return next()
// })

app.get('/',(req, res) =>{
    res.render('index')
})

app.get('/about', (req, res) =>{
    res.send('About Page')
})

app.get('/profile', (req, res) =>{
    res.send('Profile Page')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) =>{
    //console.log(req.body)
    const {username, email, password} = req.body
    const newUser = await userModel.create({
        username: username,
        email: email,
        password: password
    })
    res.send(newUser)
})

app.get('/get-users', (req, res) =>{
    // userModel.find({
    //     username: 'c'
    // }).then((users) =>{
    //     res.send(users)
    // })
    userModel.findOne({
        username: 'a'
    }).then((user) =>{
        res.send(user)
    })
})

app.get('/update-user', async(req, res) =>{
    await userModel.findOneAndUpdate({
        username: 'a'
    }, {
        email: "c@c.com"
    })

    res.send('user updated')
})

app.get('/delete-user', async(req, res) =>{
    await userModel.findOneAndDelete({
        username:"a"
    })
    res.send('user deleted')
})

app.post('/get-form-data', (req, res)=>{
    console.log(req.body)
    res.send('data received')
})

app.listen(3000)
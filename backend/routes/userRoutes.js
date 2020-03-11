const express = require('express')
const userRoutes = express.Router()
const userServices = require('../services/userServices')
const authentication = require('../services/middleware copy')

userRoutes.post('/new', (req, res)=>{
     const {first_name, last_name, user_uid, email, sessions_id} = req.body
     
     userServices.create(first_name, last_name, user_uid, email, sessions_id).catch(err=>{
         console.log(err)
     })
     .then(data=>{
         res.status(200).send(data)
     })
  
})

userRoutes.get('/', (req,res)=>{
      console.log('works?', req.headers)
      res.sendStatus(200)
})

userRoutes.get('/login', (req, res)=>{
    res.render('login')
})

userRoutes.post('/login', (req, res)=>{
    const { email , password} = req.body
    res.redirect('/portfolio')
})

userRoutes.get('/portfolio', (req, res)=>{
    res.render('portfolio')
})

userRoutes.get('/register', (req, res)=>{
    res.render('register')
})

userRoutes.put('/update', authentication, (req, res)=>{
    const {id, first_name, last_name,user_uid, email, sessions_id, cash_remaining} = req.body
    userServices.update(id, first_name, last_name,user_uid, email, sessions_id, cash_remaining).catch(err=>{
        console.log(err)
    })
    .then(data=>{
        res.status(200).send(data)
    })


})


module.exports = userRoutes
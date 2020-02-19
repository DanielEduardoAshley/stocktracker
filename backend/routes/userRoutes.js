const express = require('express')
const userRoutes = express.Router()
const userServices = require('../services/userServices')


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
      const {id} = req.body
      console.log(id)
      userServices.read(id).catch(err=>{
          console.log(err)
      })
      .then(data=>{
        res.status(200).send(data)
        console.log(data)
    })
})



userRoutes.put('/update', (req, res)=>{
    const {id, first_name, last_name,user_uid, email, sessions_id, cash_remaining} = req.body
    userServices.update(id, first_name, last_name,user_uid, email, sessions_id, cash_remaining).catch(err=>{
        console.log(err)
    })
    .then(data=>{
        res.status(200).send(data)
    })


})


module.exports = userRoutes
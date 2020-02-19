const express = require('express')
const userRoutes = express.Router()
const userServices = require('../services/userServices')



userRoutes.post('/new', (req, res)=>{
     const {first_name, last_name, email, token, uid} = req.body
     userServices.create(first_name, last_name, email, token, uid).catch(err=>{
         console.log(err)
     })
     .then(data=>{
         res.status(200).send(data)
     })
  
})



userRoutes.get('/', (req,res)=>{
      const {id} = req.body
      userServices.read(id).catch(err=>{
          console.log(err)
      })
      .then(data=>{
        res.status(200).send(data)
    })
})



userRoutes.put('/update', (req, res)=>{
    const {first_name, last_name, email, token, uid} = req.body
    userServices.update(id, first_name, last_name, email, token, uid).catch(err=>{
        console.log(err)
    })
    .then(data=>{
        res.status(200).send(data)
    })


})


module.exports = userRoutes
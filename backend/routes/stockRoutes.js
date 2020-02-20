const stockServices = require('../services/stockServices')
const express = require('express')
const stockRoutes = express.Router()

stockRoutes.get('/', (req,res)=>{
    const {id} = req.body
    stockServices.read(id).catch(err=>{
        console.log(err)
    }).then(data=>{
        res.status(200).send(data)
    })
})

stockRoutes.post('/new', (req,res)=>{
    const { user_id, symbol, bought_price, quantity} = req.body
    stockServices.create(user_id, symbol, bought_price, quantity).catch(err=>{
        console.log(err)
    })
    .then(data=>{
        res.status(200).send(data)

    })
})

stockRoutes.put('/update', (req,res)=>{
    const {id, user_id, symbol, bought_price, quantity} = req.body
    stockServices.update(id, user_id, symbol, bought_price, quantity).catch(err=>{
        console.log(err)
    })
    .then(data=>{
        res.status(200).send(data)

    })
})



module.exports = stockRoutes
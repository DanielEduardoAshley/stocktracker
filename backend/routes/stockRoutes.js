const stockServices = require('../services/stockServices')
const express = require('express')
const stockRoutes = express.Router()

stockRoutes.get('/stock', (req,res)=>{
    const {id} = req.body
    stockServices.read(id).catch(err=>{
        console.log(err)
    }).then(data=>{
        res.status(200).send(data)
    })
})

stockRoutes.post('/new', (req,res)=>{
    stockServices.create(symbol, bought_price, quantity).catch(err=>{
        console.log(err)
    })
    .then(data=>{
        res.status(200).send(data)

    })
})

stockRoutes.put('/update', (req,res)=>{
    stockServices.update(id,symbol, bought_price, quantity).catch(err=>{
        console.log(err)
    })
    .then(data=>{
        res.status(200).send(data)

    })
})



module.exports = stockRoutes
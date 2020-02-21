const stockServices = require('../services/stockServices')
const express = require('express')
const stockRoutes = express.Router()
const authentication = require('../services/middleware copy')

stockRoutes.get('/', authentication, (req,res)=>{
    const {id} = req.body
    console.log('render')
    res.render('portfolio')
    // stockServices.read(id).catch(err=>{
    //     console.log(err)
    // }).then(data=>{
    //     res.status(200).send(data)
    // })
})

stockRoutes.post('/new', authentication, (req,res)=>{
    const { user_id, symbol, bought_price, quantity} = req.body
    stockServices.create(user_id, symbol, bought_price, quantity).catch(err=>{
        console.log(err)
    })
    .then(data=>{
        res.status(200).send(data)

    })
})

stockRoutes.put('/update', authentication, (req,res)=>{
    const {id, user_id, symbol, bought_price, quantity} = req.body
    stockServices.update(id, user_id, symbol, bought_price, quantity).catch(err=>{
        console.log(err)
    })
    .then(data=>{
        res.status(200).send(data)

    })
})



module.exports = stockRoutes
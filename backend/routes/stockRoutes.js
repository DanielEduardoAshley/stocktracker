const stockServices = require('../services/stockServices')
const express = require('express')
const stockRoutes = express.Router()
const authentication = require('../services/middleware copy')

stockRoutes.get('/',authentication, (req,res)=>{
    // const {user_uid} = req.authId
    // console.log('render')
    // // res.render('portfolio')
    // stockServices.read(user_uid).catch(err=>{
    //     console.log(err)
    // }).then(data=>{
    //     console.log(data)
    //     res.render('portfolio', data)
    //     console.log(data)
    // })
    console.log('passed authentication')
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
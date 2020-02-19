const stockServices = {}
const dbconn = require('../dbconnection')

stockServices.create=(symbol, bought_price, quantity)=>{
return dbconn.one('INSERT INTO stocks VALUES(${symbol}, ${bought_price}, ${quantity}) ', {symbol, bought_price, quantity})

}

stockServices.read=(id)=>{
return dbconn.any('SELECT * FROM stocks WHERE id=${id}', {id})
}

stockServices.update=(id, symbol, bought_price, quantity)=>{
return dbconn.one('UPDATE stocks SET (symbol=${symbol}, bought_price=${bought_price}, quantity=${quantity}) WHERE id=${id} RETURNING id', {symbol, bought_price, quantity})
}

module.exports = stockServices
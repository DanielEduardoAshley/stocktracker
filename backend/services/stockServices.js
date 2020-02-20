const stockServices = {}
const dbconn = require('../dbconnection')

stockServices.create=(user_id, symbol, bought_price, quantity)=>{
return dbconn.one('INSERT INTO stock (user_id, symbol, bought_price, quantity) VALUES(${user_id}, ${symbol}, ${bought_price}, ${quantity}) RETURNING id', {user_id, symbol, bought_price, quantity})

}

stockServices.read=(id)=>{
return dbconn.any('SELECT * FROM users JOIN stock ON users.id = user_id WHERE users.id=${id}', {id})
}

stockServices.update=(id, symbol, bought_price, quantity)=>{
return dbconn.one('UPDATE stock SET symbol=${symbol}, bought_price=${bought_price}, quantity=${quantity} WHERE id=${id} RETURNING id', {symbol, bought_price, quantity})
}

module.exports = stockServices
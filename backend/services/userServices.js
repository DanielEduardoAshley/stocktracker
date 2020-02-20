const userServices = {}
const dbconn = require('../dbconnection')

userServices.create=(first_name, last_name, user_uid, email, sessions_id)=>{
return dbconn.one('INSERT INTO users (first_name, last_name, user_uid, email, sessions_id) VALUES (${first_name}, ${last_name}, ${user_uid},${email}, ${sessions_id}) RETURNING id', {first_name, last_name,user_uid, email, sessions_id,})
}


userServices.read=(id)=>{
return dbconn.any('SELECT * FROM users WHERE id=${id}', {id})
}


userServices.update=(id, first_name, last_name,user_uid, email, sessions_id, cash_remaining)=>{
return dbconn.one('UPDATE users SET first_name=${first_name}, last_name=${last_name}, user_uid=${user_uid}, email=${email}, sessions_id=${sessions_id},cash_remaining=${cash_remaining}  WHERE id=${id} RETURNING id', {id, first_name, last_name,user_uid, email, sessions_id, cash_remaining })
}

module.exports = userServices
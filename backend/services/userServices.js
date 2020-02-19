const userServices = {}
const dbconn = require('../dbconnection')

userServices.create=(first_name, last_name, email, token, uid)=>{
return dbconn.one('INSERT INTO users VALUES(first_name={first_name}, last_name={last_name}, email={email}, session_id={token}, uid={uid} RETURNING id )', {first_name, last_name, email, token, uid})
}


userServices.read=(id)=>{
return dbconn.any('SELECT * FROM users WHERE id={id}', {id})
}


userServices.update=(id, first_name, last_name, email, token, uid, cash_remaining)=>{
return dbconn.one('INSERT INTO users VALUES(first_name=${first_name}, last_name=${last_name}, email={email}, session_id=${token}, uid=${uid} RETURNING id)', {first_name, last_name, email, token, uid})
}

module.exports = userServices
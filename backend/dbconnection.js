const pg = require('pg-promise')({})
const dbconnection = pg('postgres://localhost/stocktracker')
const dbconn = ((conn)=>{
    let db = null
    const connection=()=>{
        if(!db){
            const pg = require('pg-promise')({})
            db = pg(conn)
            return db
        }
        else{
            return db
        }
    }  
    return connection 
})('postgres://localhost/stocktracker')

module.exports = dbconnection
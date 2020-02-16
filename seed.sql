  

/c DROP IF EXISTS stocktracker

 user{
     id,
     firstname VARCHAR,
     lastname VARCHAR,
     email VARCHAR,
     cash nu
 },

 stock{
     id,
     user_id REFERENCES (id) user
     symbol VARCHAR,
     boughtPrice,
     quantity,
 },
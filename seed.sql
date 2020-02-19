DROP DATABASE IF EXISTS stocktracker;
CREATE DATABASE stocktracker;

\c stocktracker;

DROP TABLE IF EXISTS users, stock;

 CREATE TABLE users
 (
     id SERIAL PRIMARY KEY,
     first_name VARCHAR,
     last_name VARCHAR,
     user_uid VARCHAR,
     email VARCHAR,
     sessions_id VARCHAR NULL,
     cash_remaining INT DEFAULT 5000
 );

CREATE TABLE stock
(
     id SERIAL PRIMARY KEY,
     user_id INT REFERENCES users(id) ON DELETE CASCADE,
     symbol VARCHAR,
     bought_price INT,
     quantity INT
);

INSERT INTO users (first_name, last_name, user_uid, email, sessions_id)
VALUES('dan','ash','5678', 'dan@gmail.com','123');

INSERT INTO stock (user_id, symbol, bought_price, quantity)
VALUES(1, 'AAPL', 100, 10);
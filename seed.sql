DROP DATABASE IF EXISTS stocktracker;
CREATE DATABASE stocktracker;

\c stocktracker;

DROP TABLE IF EXISTS users, stock;

 CREATE TABLE users
 (
     id SERIAL PRIMARY KEY,
     users_name VARCHAR,
     users_encryption VARCHAR,
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

INSERT INTO users
VALUES('1', 'dan','1234', 'dan@gmail.com','5678');

INSERT INTO stock
VALUES('1', '1', 'AAPL', 100, 10);
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
VALUES('1', 'dan','ash','5678','1234', 'dan@gmail.com');

INSERT INTO stock
VALUES('1', '1', 'AAPL', 100, 10);
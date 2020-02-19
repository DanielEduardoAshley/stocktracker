const express = require("express");
const userRoute = require('./routes/userRoutes');
const stockRoute = require('./routes/stockRoutes');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use("/user", userRoute);
app.use("/stock", stockRoute);




module.exports = { app }
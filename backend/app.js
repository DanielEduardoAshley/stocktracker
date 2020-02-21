const express = require("express");
const app = express();
const path = require('path');
const exphbs = require('express-handlebars')
const userRoute = require('./routes/userRoutes');
const stockRoute = require('./routes/stockRoutes');
const bodyParser = require('body-parser');
const cors = require('cors')


app.use(cors())
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.engine('handlebars', exphbs({ defaultLayout : 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static(path.join(__dirname, 'public')))
app.use("/user", userRoute);
app.use("/stock", stockRoute);


module.exports = { app }
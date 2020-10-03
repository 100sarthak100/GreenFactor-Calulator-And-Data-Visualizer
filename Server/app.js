const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv/config');
const userRoute = require('./routes/userRoutes');
const dataRoute = require('./routes/dataRoutes');
const bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.listen(5000);

app.use('/user',userRoute);
app.use('/data',dataRoute);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//connect to mongoDB
const dbURI = process.env.DB_CONNECTION;
mongoose.connect(dbURI, {useNewUrlParser : true, useUnifiedTopology : true}, () => {
    console.log("Connected to DB")
})

app.get('/', (req, res) => {
    res.send("We are at Home")
})
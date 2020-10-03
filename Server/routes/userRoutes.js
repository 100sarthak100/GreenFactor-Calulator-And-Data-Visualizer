const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', (req, res) => {
    res.send("We are at users")
})

router.post('/', jsonParser, (req, res) => {
    console.log(req.body)
})

module.exports = router;
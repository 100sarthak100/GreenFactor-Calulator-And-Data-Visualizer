const express = require('express');
const router = express.Router();
const Data = require('../models/Data');
const bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// get all the data
router.get('/', jsonParser,async (req, res) => {
    try {
        const datas = await Data.find();
        result = JSON.stringify(datas);
        result = JSON.parse(result);
        materialArray = [];
        dateArray = [];
        let materialMap = new Map([
            ['Denim', 10],
            ['Polyster', 5],
            ['Silk', 30],
            ['Cotton', 35],
            ['Leather', 25],
            ['Woolen', 50]
          ]);
 
        for(var i = 0; i < result.length; i++) {
            var obj = result[i];
            materialArray.push(obj.material);
            dateArray.push(obj.purchaseDate);
        }
        
        var payload = [];
        var GF = 0;
        for(var i = 0; i < materialArray.length; i++) {
            payload.push([dateArray[i], materialMap.get(materialArray[i])]);
            GF += materialMap.get(materialArray[i]);
        }
        console.log("GF Value ", GF);
        for(var i = 0; i < payload.length; i++) {
            console.log(payload[i]);
        }
         
        res.json(payload);
    } catch(err) {
        console.log(err);
    }
})

// submit a data
router.post('/', jsonParser, async (req, res) => {
    console.log(req.body)
    const data = new Data(req.body);
    try {
        const savedData = await data.save();
        res.json(savedData);
    } catch(err) {
        console.log(err);
    }
})

// get a specific data
router.get('/:id', async (req, res) => {
    try {
        const data = await Data.findById(req.params.id);
        res.json(data); 
    } catch(err) {
        console.log(err);
    }
})

// delete data
router.delete('/:id', async (req, res) => {
    try {
        const reomvedData = await Data.deleteOne({_id: req.params.id});
        res.json(reomvedData);
    } catch(err) {
        console.log(err);
    }
})

// update data
router.patch('/:id', jsonParser, async (req, res) => {
    try {
        const updatedData = await Data.updateOne(
            {_id: req.params.id}, 
            { $set: {price: req.body.price} }
            );
        res.json(updatedData);
    } catch(err) {
        console.log(err);
    }
})

// get all material name from DB
// router.get('/', async (req, res) => {
//     try {
//         const datas = await Data.find();
//         res.json(datas[0]);
//     } catch(err) {
//         console.log(err);
//     }
// })

module.exports = router;
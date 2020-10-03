const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
    productName: {
        type: String,
        required: true
    },
    material: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    purchaseDate: {
        type: Date,
        required: true
    }
}, {timestamps: true});

const Data = mongoose.model('Data', dataSchema);
module.exports = Data;
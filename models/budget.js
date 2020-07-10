const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const budgetSchema = new Schema({
    month: {
        type: String,
        required: true
    },
    netIncome: {
        type: Number,
        required: true
    },
    carNote: {
        type: String
    },
    carInsurance: {
        type:Number
    },
    rent: {
        type: Number
    },
    phoneBill: {
        type: Number
    },
    utilities: {
        type: Number
    },
    wifi: {
        type: Number
    },
    wellBeing: {
        type: Number
    }
}, {timestamps: true})

module.exports = mongoose.model('Budget', budgetSchema);
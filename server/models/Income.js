const mongoose = require('mongoose');
const Schema = require('mongoose').Schema;
const incomeSchema = new mongoose.Schema({
    category: String,
    date: String,
    amount: Number,
    comment: String,
    userId: {type: Schema.Types.ObjectId, ref: 'User'}

});

module.exports = mongoose.model("Income", incomeSchema);

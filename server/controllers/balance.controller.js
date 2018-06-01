const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Income = mongoose.model('Income');
const User = mongoose.model('User');
const Expense = mongoose.model('Expense');

const getall = (req, res, userid) => {

    Income.aggregate([
        {
            $group: {
                _id: userid,
                total: {$sum: "$amount"}
            }
        }
    ]).then((income) => {
        Expense.aggregate([
            {
                $group: {
                    _id: userid,
                    total: {$sum: "$amount"}
                }
            }
        ]).then((expense) => {
            const balance = income[0].total - expense[0].total;
            res.status(200).send({income: income, expense: expense, balance: balance})
        })
    }).catch((err) => {
        res.status(500).send(err.message);
    });

};
module.exports = {
    getall: getall
};

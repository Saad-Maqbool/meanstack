const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Income = mongoose.model('Income');
const User = mongoose.model('User');


const getall=(req, res, userid) => {

    Income.find({'userId': userid}).then((income) => {

        if (!income.length) {
            return res.status(404).send("no user found");
        }
        res.status(200).send(income);


    })
        .catch((err) => {
            res.status(500).send(err.message);
        });


};

const create=(req, res, category, amount, user_id, comment, date) => {
    Income.create({
        category: category,
        amount: amount,
        userId: user_id,
        date: date,
        comment: comment


    }).then((income) => {
        res.status(200).send(income);
    }).catch((err) => {
        res.status(500).send(err.message);
    });

};

const update=(req, res, user_id, income) => {
    console.log(income);
    Income
        .findOneAndUpdate(
            {
                userId: user_id
            },
            income
        ).then((income) => {
            res.status(200).send(income);
        }).catch(err => {
            res.status(500).send(err.message);
        })
};

const remove=(req, res, user_id) => {
    Income
        .findOneAndRemove({
            userId: user_id
        }).then((income) => {
            res.status(200).send(income);
        })
        .catch(err => {
            res.status(500).send(err.message);
        })
};

module.exports = {

    create: create,
    getall: getall,
    update: update,
    remove: remove
};

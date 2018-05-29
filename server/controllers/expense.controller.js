const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Expense = mongoose.model('Expense');

const getall=(req, res, userid) => {

  Expense.find({'userId': userid}).then((expense) => {
    if (!expense.length) {
      return res.status(404).send("no user found");
    }
    res.status(200).send(expense);
  })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};
const create=(req, res, category, amount, user_id, comment, date) => {
  Expense.create({
    category: category,
    amount: amount,
    userId: user_id,
    date: date,
    comment: comment


  }).then((expense) => {
    res.status(200).send(expense);
  }).catch((err) => {
    res.status(500).send(err.message);
  });

};

const update=(req, res, user_id, expense) => {
  console.log(expense);
  Expense
    .findOneAndUpdate(
      {
        userId: user_id
      },
      expense
    ).then((expense) => {
    res.status(200).send(expense);
  }).catch(err => {
    res.status(500).send(err.message);
  })
};

const remove=(req, res, user_id) => {
  Expense
    .findOneAndRemove({
      userId: user_id
    }).then((expense) => {
    res.status(200).send(expense);
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

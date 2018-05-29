const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const balanceController = require('../controllers/balance.controller');
const config = require('../../config');

router.use('/', function (req, res, next) {

  jwt.verify(req.query.token, config.secret, function (err, decode) {
    if (err) {
      res.status(401).json({
        title: 'Not Authenticated',
        error: err
      });
    }
    next();
  })
});
router.get('/:id', function (req, res) {
  balanceController.getall(req, res, req.params.id);

});

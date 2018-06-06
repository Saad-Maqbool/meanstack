const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const balanceController = require('../controllers/balance.controller');
const config = require('../../config');


router.get('/:id', function (req, res) {
    balanceController.getall(req, res, req.params.id);

});


module.exports = router;

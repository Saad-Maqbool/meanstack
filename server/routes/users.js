const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const userController = require('../controllers/user.controller');

function isAuthenticated(req, res, next) {

    if (req.method === "GET") {
        return next();
    }
    if (req.isAuthenticated()) {
        return next();
    }

    return res.redirect('/#login');
};

router.use('/', isAuthenticated);

router.post('/register', ((req, res) => {
    userController.create(req, res, req.body.username, req.body.email, req.body.password);

}));

router.post('/login', ((req, res) => {
    userController.login(req, res);
}));
module.exports = router;

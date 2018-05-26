const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('../../config');


function create(req, res, username, email, password) {
  const hashedPassword = bcrypt.hashSync(password, 8);

  User.create({
    username: username,
    email: email,
    password: hashedPassword
  }).then((user) => {
    const token = jwt.sign({id: user._id}, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({auth: true, token: token});
  }).catch((err) => {
    return res.status(500).send(err.message)
  })
}

function login(req, res) {
  User.findOne({email: req.body.email}).then((user) => {
    if (!user) return res.status(404).send('No user found.');

    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) return res.status(401).send({auth: false, token: null});

    const token = jwt.sign({id: user._id}, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({auth: true, token: token, userId: user._id});
  }).catch((err) => {
    res.status(500).send(err.message);
  });
}


module.exports = {

  create: create,
  login: login
};



const express = require('express'),
      User = require('../models/user'),
      mongo = require('mongodb'), // take
      mongoose = require('mongoose'), // take
      router = express.Router();

router.get('/register', (req, res) => {
  res.status(200).json('register!');
});

router.get('/login', (req, res) => {
  res.status(200).json('login');
});


router.post('/register', (req, res) => {
  console.log('register hit!');
  let username = req.body.username,
      password = req.body.password;

  console.log('username:', username);
  console.log('password:', password);

  // req.checkBody('name', 'Name should be required!').notEmpty();
  // let errors = req.validationErrors();

  console.log('new user should be created!');
  let newUser = new User({
    username: username,
    password: password
  });

  newUser.save();
  console.log('user should be saved!');


  res.status(200).json('register!');
});
module.exports = router;

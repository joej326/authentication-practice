const express = require('express'),
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

  console.log(username);
  console.log(password);
  res.status(200).json('register!');
});
module.exports = router;

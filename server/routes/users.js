const express = require('express'),
router = express.Router();

router.get('/register', (req, res) => {
  res.status(200).json('register!');
});

router.get('/login', (req, res) => {
  res.status(200).json('login');
});

module.exports = router;

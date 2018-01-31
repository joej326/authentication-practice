const express = require('express'),
      router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json('you got the home page!');
});

router.get('/welcome', (req, res) => {
  res.status(200).json('welcome!');
});

module.exports = router;

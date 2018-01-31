const express = require('express'),
      jwt = require('express-jwt'),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      passport = require('passport'),
      LocalStrategy = require('passport-local'),
      mongo = require('mongodb'),
      config = require('../.config'),
      mongoose = require('mongoose');
      mongoose.connect('mongodb://localhost:27017/authentication');

const routes = require('./routes/index');
const users = require('./routes/users');

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: config.secret,
  saveUninitialized: true,
  resave: true
}));

app.use(passport.initialize());
app.use(passport.session());

const authCheck = jwt({ // this string is auth0 client secret
  secret: new Buffer(config.auth0.clientSecret, 'base64'),
  audience: config.auth0.clientId // this is clientID
});

app.use('/', routes);
app.use('/users', users);

app.use('/protected', authCheck, (req, res) => {
  res.json('hello this is protected');
});

// app.post('/users/register', (req, res) => {
//   console.log('register hit!');
//   let username = req.body.username,
//       password = req.body.password;

//   console.log(username);
//   console.log(password);
//   res.status(200).json('register!');
// });

app.listen(3001, () => {
  console.log('working');
});

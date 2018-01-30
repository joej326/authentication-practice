const express = require('express'),
      path = require('path'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      exphbs = require('express-handlebars'),
      expressValidator = require('express-validator'),
      flash = require('connect-flash'),
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

app.use('/', routes);
app.use('/users', users);

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

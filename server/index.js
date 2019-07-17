const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const {
  User, Date, UserInterest, Couple, Category, Spot 
} = require('../database/models/index.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());

passport.use(new LocalStrategy((username, password, done) => {
  //  find user
  //    check for user and valid password
  //  return done with the user
}));

app.get('/', (req, res) => {
  res.status(200).render('index');
});

app.get('/login', (req, res) => {

});

app.get('/signup', (req, res) => {

});

app.get('/users/:id', (req, res) => {
  //  this is to retrieve a specific user profile
});

app.get('/interests/:userId', (req, res) => {
  //  this is to find new spots around the user
});

app.get('/matches/:userId', (req, res) => {
  //  this is to retrieve all of the current matches
});

app.post('/login', (req, res) => {
  //  authorize user credentials here
});

app.post('/signup', (req, res) => {
  //  create and authenticate new user here
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);

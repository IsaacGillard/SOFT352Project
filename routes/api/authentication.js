const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../../models/user.js');

const router = express.Router();

//Configure promises
mongoose.Promise = global.Promise;

// GET to /checksession
router.get('/checksession', (req, res) => {
  if (req.user) {
    return res.send(JSON.stringify(req.user));
  }
  return res.send(JSON.stringify({}));
});

// Get to /logout
router.get('/logout', (req, res) => {
  req.logout();
  return res.send(JSON.stringify(req.user));
});

// POST to /login
router.post('/login', async (req, res) => {
  //look up users email
  const query = User.findOne({ email: req.body.email });
  const foundUser = await query.exec();

  //if found, add username to body
  if ( foundUser ){ req.body.username = foundUser.username; }
  passport.authenticate('local')(req, res, () => {
    // If logged in, we should have user info to send back
    if (req.user) {
      return res.send(JSON.stringify(req.user));
    }

    // Otherwise return an error
    return res.send(JSON.stringify({ error: 'There was an error logging in' }));
  });
});

// POST to /register
router.post('/register', (req, res) => {
  // Create a user object to save, using values from incoming JSON
  const newUser = new User(req.body);

  // Save, via passport's "register" method, the user
  User.register(newUser, req.body.password, (err) => {
    // If there's a problem, send back a JSON object with the error
    if (err) {
      return res.send(JSON.stringify({ error: err }));
    }
    // Otherwise, return an error
    return res.send(JSON.stringify({error: 'There was an error logging in.'}));
  });
});

module.exports = router;

const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users_controllers');
const passport = require('passport');

router.get('/profile', usersControllers.profile);
router.get('/signUp', usersControllers.signUp);
router.get('/signIn', usersControllers.signIn);

router.post('/create', usersControllers.create);
// router.post('/create-session', usersControllers.createSession);


// use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
  'local',
  {failureRedirect: '/users/signIn'},
), usersControllers.createSession);

module.exports = router;
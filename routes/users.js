const express = require('express');
const router = express.Router();

const usersControllers = require('../controllers/users_controllers');

router.get('/profile', usersControllers.profile);
router.get('/signUp', usersControllers.signUp);
router.get('/signIn', usersControllers.signIn);

router.post('/create', usersControllers.create);
router.post('/create-session', usersControllers.createSession);


module.exports = router;
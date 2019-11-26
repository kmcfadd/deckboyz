const router = require('express').Router();
const loginController = require('../../controllers/loginController');
const bcrypt = require('bcryptjs')

// user model
const User = require('../../models/user.js')

//@route GET applicationCache.users
//@desc register new user
//@access public

router.route('/')
    .post(loginController.test)

module.exports = router
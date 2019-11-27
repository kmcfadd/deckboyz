const router = require('express').Router();
const loginController = require('../../controllers/loginController');
const verify = require("../../middleware/auth")

// user model
const User = require('../../models/user.js')

//@route GET applicationCache.users
//@desc register new user
//@access public

router.route('/')
    .get(verify, loginController.something)
    .post(loginController.register)
router.route('/auth')
    .post(loginController.auth)



module.exports = router
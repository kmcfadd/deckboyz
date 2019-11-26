const db = require('../models');
const bcrypt = require('bcryptjs')

module.exports = {
    test: function (req, res) {
        db.User
            .create(req.body)
            .then(stuff => res.json(stuff))
            .catch(err => console.log(err))

    },
    // verify: function (req, res) {
    //     const { username, email, password } = req.body
    //     if (!username || !email || !password) {
    //         return res.status(400).json({ msg: "please enter all fields" })
    //     }
    //     //check for existing user
    //     User.findOne({ email })
    //         .then(user => {
    //             if (user) return res.status(400).json({ msg: "email already exists" })
    //         })
    //     const newUser = new User({
    //         username,
    //         email,
    //         password
    //     });
    //     //Create Salt and hash
    //     bcrypt.genSalt(10, (err, salt) => {
    //         bcrypt.hash(newUser.password, salt, (err, hash) => {
    //             if (err) throw err;
    //             newUser.password = hash;
    //             newUser.save()
    //                 .then(user => {
    //                     res.json({
    //                         user: {
    //                             id: user.id,
    //                             username: user.username,
    //                             email: user.email
    //                         }
    //                     })
    //                 })
    //         })
    //     })
    // }



};
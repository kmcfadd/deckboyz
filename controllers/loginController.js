const db = require('../models');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
//const verify = require("../middleware/auth")

exports.register = function (req, res) {
    const { username, email, password } = req.body;
    // console.log(username)
    //Check if there is a user in the database with same email.
    if (!username || !email || !password) {
        return res.status(400).json({ msg: "Please fill out all fields." })
    } else {
        db.User.findOne({ email })
            .then(user => {
                //If there isn't, create a new user with hashed password.
                if (!user) {
                    let salt = bcrypt.genSaltSync(10);
                    db.User.create({
                        username: username,
                        email: email,
                        password: bcrypt.hashSync(password, salt),
                    }).then(user => {
                        db.User.create({
                            user: user.id
                        })
                        //Create JSON web token which is signed with the new user's info and expires in 1 hour.
                        jwt.sign({
                            id: user.id
                        }, 'secretkey', { expiresIn: 3600 }, (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.username,
                                    email: user.email
                                }
                            });
                            console.log("User added to database.")
                            console.log(`User info: ${user}`)
                            console.log(`User token: ${token}`)
                            console.log(`Cart created with user id: ${user.id}`)
                        })
                    })
                }
                if (user) {
                    return res.status(400).json({ msg: "User already exists." })
                }
            })
            .catch(function (err) {
                console.log(err)
            });
    }
};
exports.auth = function (req, res) {
    const { username, password } = req.body;
    // console.log(username)
    //Check if there is a user in the database with same email.
    if (!username || !password) {
        return res.status(400).json({ msg: "Please fill out all fields." })
    } else {
        db.User.findOne({ username })
            .then(user => {
                //If there isn't, create a new user with hashed password.
                if (!user) return res.status(400).json({ msg: "user does not exist" })

                // validate pass
                bcrypt.compare(password, user.password)
                    .then(isMatch => {
                        if (!isMatch) return res.status(400).json({ msg: "Invalid Credentials" })

                        jwt.sign({
                            id: user.id
                        }, 'secretkey', { expiresIn: 3600 }, (err, token) => {
                            if (err) throw err;
                            res.json({
                                token,
                                user: {
                                    id: user.id,
                                    name: user.username,
                                    email: user.email
                                }
                            });
                            console.log("user in!")
                        })
                    })


            });
    }
};

// @ route GET api

exports.something = function (req, res) {
    console.log(req.user.id)
    db.User.findById(req.user.id)
        .select('-password')
        .then(user => res.json(user));
}
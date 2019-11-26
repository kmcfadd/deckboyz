const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        validate: [
            function (input) {
                return input.length >= 6;
            },
            'Password needs to be longer'
        ]
    },
    created: {
        type: Date,
        default: Date.now
    },
    isLoggedin: {
        type: Boolean
    }

})

const User = mongoose.model('User', userSchema);

module.exports = User;
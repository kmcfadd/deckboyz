const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Card.find({})
            .then(stuff => res.json(stuff))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.Card.findById({ $text: { $search: req.params.id }})
            .then(stuff => res.json(stuff))
            .catch(err => res.status(422).json(err))
    },

};
const db = require('../models');

module.exports = {
    findAll: function (req, res) {
        db.Card.find({})
            .then(stuff => res.json(stuff))
            .catch(err => res.status(422).json(err))
    },
    findByName: function (req, res) {
        db.Card.find({ $text: { $search: req.params.id }})
            .then(stuff => res.json(stuff))
            .catch(err => res.status(422).json(err))
    },

};
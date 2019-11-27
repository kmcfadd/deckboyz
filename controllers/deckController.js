const db = require('../models');
// const verify = require("../../middleware/auth")

module.exports = {
    findAllDecks: function (req, res) {
        db.Deck
            .find(req.query)
            .then(stuff => res.json(stuff))
            .catch(err => res.status(422).json(err))
    },
    findDeckById: function (req, res) {
        db.Deck
            .findById(req.params.id)
            .then(stuff => res.json(stuff))
            .catch(err => res.status(422).json(err))
    },
    createDeck: function (req, res) {
        db.Deck
            .create(req.body)
            .then(stuff => res.json(stuff))
            .catch(err => res.status(422).json(err))
    },
    updateDeck: function (req, res) {
        db.Deck
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(stuff => res.json(stuff))
            .catch(err => res.status(422).json(err))
    },
    deleteDeck: function (req, res) {
        db.Deck
            .findById({ _id: req.params.id })
            .then(stuff => stuff.remove())
            .then(stuff => res.json(stuff))
            .catch(err => res.status(422).json(err))
    }

}
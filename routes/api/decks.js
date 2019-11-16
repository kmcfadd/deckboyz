const router = require('express').Router();
const deckController = require('../../controllers/deckController');

router.route('/')
    .get(deckController.findAllDecks)
    .post(deckController.createDeck);

router.route('/:id')
    .get(deckController.findDeckById)
    .put(deckController.updateDeck)
    .delete(deckController.deleteDeck);

module.exports = router;
const router = require('express').Router();
const cardController = require('../../controllers/cardController');

// Matches with /api/cards
router.route('/')
    .get(cardController.findAll);

// Matches with /api/cards/:id
router.route('/:id')
    .get(cardController.findById);

module.exports = router;
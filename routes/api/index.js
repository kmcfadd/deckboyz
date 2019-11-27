const router = require('express').Router();
const cardRoutes = require('./cards');
const deckRoutes = require('./decks');
const loginRoutes = require('./users');


router.use('/cards', cardRoutes);
router.use('/decks', deckRoutes);
router.use('/users', loginRoutes);


module.exports = router;
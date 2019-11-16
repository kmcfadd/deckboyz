const router = require('express').Router();
const cardRoutes = require('./cards');
const deckRoutes = require('./decks');
// const loginRoutes = require('./login);

router.use('/cards', cardRoutes);
router.use('/decks', deckRoutes);
// router.use('/login', loginRoutes);

module.exports = router;
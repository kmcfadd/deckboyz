const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema ({
    set: { type: String, required: true },
    number: { type:  String, required: true },
    name: { type:  String, required: true },
    type: { type: String, required: true },
    types: { type:  Array, required: true },
    colors: { type:  Array, required: true },
    manaCost: { type:  String, required: false },
    convertedManaCost: { type:  Number, required: true },
    power: { type:  String, required: false },
    toughness: { type:  String, required: false },
    text: { type:  String, required: true },
    artist: { type:  String, required: false },
    copies: { type: Number, require: true },
});

const deckSchema = new mongoose.Schema ({ 
    children: [cardSchema],
    deckName: {type: String, required: true },
    createdby: { type: String, },
    createdOn: { type: Date, default: Date.now },
});

const Deck = mongoose.model('Deck', deckSchema);

module.exports = Deck;
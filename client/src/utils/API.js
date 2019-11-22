import axios from 'axios';

export default {
    // get all cards available
    getCards: function() {
        return axios.get('/api/cards');
    },
    // search for specific card names
    getCard: function(id) {
        return axios.get('/api/cards/' + id);
    },
    // get all decks in database
    getDecks: function() {
        return axios.get('/api/decks');
    },
    // find specific deck(s)
    getDeck: function(id) {
        return axios.get('/api/decks/' + id);
    },
    // save a new deck into database
    createDeck: function(data) {
        return axios.post('/api/decks', data)
    },
    // remove a deck from database
    deleteDeck: function(id) {
        return axios.delete('/api/decks/' + id);
    },
    // register a new user
    register: function(newUser) {
        return axios.post('/api/login', newUser)
    },
    // login as a user
    login: function(userInfo) {
        return axios.post('/api/login', userInfo)
    },
    
}
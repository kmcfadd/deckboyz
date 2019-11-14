import axios from 'axios';

export default {
    getCards: function() {
        return axios.get('/api/cards');
    },
    getCard: function() {
        return axios.get('/api/cards/' + id);
    },
}
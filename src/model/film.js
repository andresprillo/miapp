const mongoose = require('mongoose');

const Film = mongoose.model('Film', {
    title: {
    type: String,
    required: true
    },
    director: {
    type: String,
    required: true
    },
    actor: {
    type: String,
    required: true
    },
    genre: {
    type: String,
    required: true
    }
    });
    
    module.exports = Film;
    
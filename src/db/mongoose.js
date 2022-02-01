const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://andresprillo:bocampeon@cluster0.oanfy.mongodb.net/cinevitta', {
useNewUrlParser: true,
useCreateIndex: true,
useUnifiedTopology: true
});

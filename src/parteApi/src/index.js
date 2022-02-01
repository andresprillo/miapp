require('./db/mongoose');
const express = require('express');
const app = express();
const port = 3001;
const Film = require('./model/films');

app.use(express.json());

// Read-- Mostrar todos los films en "/catalogo"
app.get('/catalogo', (req, res) => {
    Film.find()
        .then((result) => {
            res.send(result)
        })
        .catch(err => res.status(404).send(err));
})

app.listen(port, () => {
    console.log(`Funcionando en http://localhost:${port}`);
});

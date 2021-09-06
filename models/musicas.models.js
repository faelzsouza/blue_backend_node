const mongoose = require("mongoose");

const musicaModel = new mongoose.Schema({
    titulo: { type: String, required: true },
    artista: { type: String, required: true },
    album: { type: String, required: true },
    capaUrl: { type: String, required: true },
});

const Musica = mongoose.model("musicas", musicaModel);

module.exports = Musica;

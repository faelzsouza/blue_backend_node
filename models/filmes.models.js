const mongoose = require("mongoose");

const filmeSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    duracao: { type: Number, required: true },
    cast: { type: Array },
    ano: { type: Date, required: true },
    genero: { type: String },
    direcao: { type: String },
});

const Filme = mongoose.model("filmes", filmeSchema);

module.exports = Filme;

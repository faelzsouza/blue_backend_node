const express = require("express");
const router = express.Router();
const Filme = require("../models/filmes.models");

router.post("/add", async (req, res) => {
    await Filme.create(req.body)
        .then(() => res.status(200).send("Filme adicionado com sucesso!"))
        .catch((err) => {
            console.error(err);
            res.status(400).send("Algo deu errado! :/");
        });
});

router.get("/", async (req, res) => {
    await Filme.find({})
        .then((musicas) => res.status(200).send(musicas))
        .catch((err) => {
            console.error(err);
            res.status(400).send("Algo deu errado! :/");
        });
});

router.get("findById/:id", async (req, res) => {
    await Filme.find({ _id: req.params.id })
        .then((filme) => res.status(200).send(filme))
        .catch((err) => {
            console.error(err);
            res.status(400).send("Algo deu errado! :/");
        });
});

router.put("/update/:id", async (req, res) => {
    await Filme.updateOne({ _id: req.params.id })
        .then(() => res.status(200).send("Filme alterado com sucesso!"))
        .catch((err) => {
            console.error(err);
            res.status(400).send("Algo deu errado! :/");
        });
});

router.delete("/delete/:id", async (req, res) => {
    await Filme.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).send("Filme deletado com sucesso!"))
        .catch((err) => {
            console.error(err);
            res.status(400).send("Algo deu errado! :/");
        });
});

module.exports = router;
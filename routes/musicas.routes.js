const express = require("express");
const router = express.Router();
const Musica = require("../models/musicas.models");
const auth = require("../controllers/auth.controller");

router.post("/add", async (req, res) => {
    await Musica.create(req.body)
        .then(() => res.status(200).send("Música adicionada com sucesso!"))
        .catch((err) => {
            console.error(err);
            res.status(400).send(
                "Teve algum erro, você passou as informações corretamente?"
            );
        });
});

// auth.checkUser('fael', 'FaelzinhoD@Blue').then(console.log)

router.get("/", async (req, res) => {
    if (req.headers.user == null || req.headers.password == null) {
        res.status(400).send("Necessário estar loggado! Informe usuário e senha!");
    } else {
        await auth
            .checkUser(req.headers.user, req.headers.password)
            .then(async (result) => {
                if (result === true) {
                    await Musica.find({})
                        .then((musicas) => {
                            console.info("Loggado");
                            res.status(200).send(musicas);
                        })
                        .catch((err) => {
                            console.error(err);
                            res.status(400).send("Algo deu errado! :/");
                        });
                } else {
                    console.info("Senha e/ou usuário errados!");
                    res.status(400).send("Senha e/ou usuário errados!");
                }
            });
    }
});

router.get("/findById/:id", async (req, res) => {
    await Musica.find({ _id: req.params.id })
        .then((musica) => res.status(200).send(musica))
        .catch((err) => {
            console.error(err);
            res.status(400).send("Algo deu errado! :/");
        });
});

router.put("/update/:id", async (req, res) => {
    await Musica.updateOne({ _id: req.params.id }, req.body)
        .then(() => res.status(200).send("Música atualizada!"))
        .catch((err) => {
            console.error(err);
            res.status(400).send("Algo deu errado! :/");
        });
});

router.delete("/delete/:id", async (req, res) => {
    await Musica.deleteOne({ _id: req.params.id })
        .then(() => res.status(200).send("Música deletada com sucesso!"))
        .catch((err) => {
            console.error(err);
            res.status(400).send("Algo deu errado! :/");
        });
});

module.exports = router;

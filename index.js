require('dotenv').config();
const express = require('express')
const db = require('./models/database/conn')

const app = express();
const port = 3000;

const dbUrl = process.env.DB_URL;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

db(dbUrl, dbUser, dbPass, dbName)

app.use(express.json());
const musicaRotas = require('./routes/musicas.routes')
app.use('/musica', musicaRotas)

app.listen(process.env.PORT || port, () => {
    console.log(`Server listening on http://localhost:${port}`)
})
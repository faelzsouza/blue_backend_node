const mongoose = require("mongoose");

const db = (url, user, pass, dbName) => {
    mongoose
        .connect(
            `${url}/${dbName}`,
            {
                user: user,
                pass: pass,
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
        .then(() => {
            console.log("MongoDB connected!");
        })
        .catch((err) => {
            console.error(err);
        });
};

module.exports = db
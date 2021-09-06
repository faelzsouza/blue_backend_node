const bcrypt = require("bcrypt");
const User = require("../models/users.models");
const db = require("../models/database/conn");

const saltRounds = 10;

const userCreate = (user, password) => {
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            await User.create({user: user, password: hash})
                .then(() => console.log('Salvo no DB!'))
                .catch(err => console.error(err))
        });
});
}

const checkUser = async (user, password) => {
    return await User.findOne({ user: user })
    .then( async (user) => {
        return await bcrypt.compare(
            password,
            user.password,
        )
        .then(result => result)
    })
}

module.exports = {
    userCreate,
    checkUser
}
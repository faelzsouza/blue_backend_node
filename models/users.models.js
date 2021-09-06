const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    createdAt: { type: Date, default: Date.now() },
    user: { type: String, required: true },
    password: { type: String, required: true }
})

const User = mongoose.model('users', userSchema)

module.exports = User;
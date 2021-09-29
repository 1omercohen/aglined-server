const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true},
    status: { type: String, default: "Active"}
})

module.exports = model('User', UserSchema);

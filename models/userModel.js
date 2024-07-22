const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    phone: String,
    qualification: String,
    field: String,
    address: String,
    applicationHistory: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Application' }]
});

module.exports = mongoose.model('User', UserSchema);
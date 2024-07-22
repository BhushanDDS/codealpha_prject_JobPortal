const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    candidate: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    resume: String,
    status: { type: String, default: 'Applied' }
});

module.exports = mongoose.model('Application', ApplicationSchema);
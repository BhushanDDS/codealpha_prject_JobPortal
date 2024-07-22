const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    name: String,
    description: String,
    postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Job', JobSchema);
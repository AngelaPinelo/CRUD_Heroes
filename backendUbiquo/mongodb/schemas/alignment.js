const mongoose = require('mongoose');

const alignmentSchema = new mongoose.Schema({
    alignment_id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Alignemnt', alignmentSchema, 'alignment');

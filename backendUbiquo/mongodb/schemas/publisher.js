const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    publisher_id: {
        type: Number,
        required: true,
    },
    publisher_name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Publisher', publisherSchema, 'publisher');

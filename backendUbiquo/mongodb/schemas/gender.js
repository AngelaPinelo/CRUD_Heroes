const mongoose = require('mongoose');

const genderSchema = new mongoose.Schema({
    gender_id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Gender', genderSchema, 'gender');

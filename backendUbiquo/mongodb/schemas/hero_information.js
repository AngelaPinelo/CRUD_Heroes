const mongoose = require('mongoose');

const heroInformationSchema = new mongoose.Schema({
    hero_id: {
        type: Number,
        required: false,
    },
    name: {
        type: String,
        required: true,
    },
    eye_color: {
        type: String,
        required: false,
    },
    hair_color: {
        type: String,
        required: true,
    },
    skin_color: {
        type: String,
        required: false,
    },
    height: {
        type: Number,
        required: false,
    },
    weight: {
        type: Number,
        required: false,
    },
    race: {
        type: String,
        required: false,
    },
    publisher_id: {
        type: Number,
		ref: 'Publisher',
        required: false,
    },
	gender_id: {
        type: Number,
        ref: 'Gender',
        required: false,
    },
    alignment_id: {
        type: Number,
		ref: "Alignment",
        required: false,
    },
});

module.exports = mongoose.model('HeroInformation', heroInformationSchema, 'hero_information');
